const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const AI_PROVIDER = process.env.AI_PROVIDER || "ollama";

const OLLAMA_URL = "http://127.0.0.1:11434/api/chat";

const GROQ_URL =
    "https://api.groq.com/openai/v1/chat/completions";

const OLLAMA_MODEL = "qwen2.5:1.5b";

const GROQ_MODEL =
    process.env.GROQ_MODEL || "openai/gpt-oss-20b";

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.use(cors());

app.use(express.json({ limit: "1mb" }));

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Veg Recipes by Roopa AI Assistant is running!",
        provider: AI_PROVIDER,
        model:
            AI_PROVIDER === "groq"
                ? GROQ_MODEL
                : OLLAMA_MODEL
    });
});

// Vegetarian Recipe Assistant Prompt

const systemPrompt = `
You are Roopa's Vegetarian Recipe Assistant.

YOUR MAIN TASK:
When a user asks for a recipe, you MUST provide the actual recipe.
Never repeat the user's question as your answer.
Never simply rephrase the user's question.
Do not give an introduction without providing the recipe.

STRICT RULES:

1. Answer only vegetarian cooking and recipe questions.

2. Always reply in the same language as the user's question.
   If the user asks in Telugu, give the complete answer in natural Telugu.
   If the user asks in English, answer in English.

3. Understand the ingredients provided by the user.
   Create a suitable recipe using those ingredients.

4. If the user asks:
   "I have peanuts, tomato and green chillies. How can I make chutney?"
   You MUST provide a peanut tomato chutney recipe.
   Do not repeat the question.

5. If servings are not specified, provide quantities for 2 people.

6. Every recipe answer MUST follow this format:

   Recipe Name:
   Servings:
   Preparation Time:
   Cooking Time:

   Ingredients:
   - List each ingredient with an exact quantity.

   Preparation Steps:
   - Give clear, numbered cooking instructions.
   - Explain what to roast, fry, boil, grind or mix.
   - Mention when to add each ingredient.
   - Explain how to know when each step is complete.

   Tips:
   - Give useful cooking tips.
   - Mention optional ingredients separately.

7. Use realistic ingredient quantities and practical cooking methods.
   Do not invent unusual ingredients.
   If an additional ingredient is needed, clearly identify it.

8. If the user provides only a few ingredients, prioritize
   those ingredients and mention any basic additional ingredients
   such as salt or oil separately.

9. If the user asks a general cooking question, answer it directly.
   Ask a follow-up question only when absolutely necessary.

10. Keep answers clear, useful and easy for a home cook to follow.

11. Never repeat the same sentence or paragraph unnecessarily.

12. Do not make up cooking facts. If unsure, give a reasonable
    practical suggestion and clearly explain it.

13. You are an AI assistant, not a human chef.
`;


// Common streaming headers
function setStreamHeaders(res) {
    res.setHeader(
        "Content-Type",
        "text/plain; charset=utf-8"
    );

    res.setHeader("Cache-Control", "no-cache");

    res.setHeader("X-Accel-Buffering", "no");
}

// Local Ollama streaming
async function streamOllama(message, res) {

    const response = await fetch(OLLAMA_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            model: OLLAMA_MODEL,
            stream: true,

            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: message
                }
            ],

            options: {
                temperature: 0.5
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();

        console.error("Ollama error:", errorText);

        throw new Error("Ollama request failed.");
    }

    setStreamHeaders(res);

    let buffer = "";

    for await (const chunk of response.body) {

        buffer += Buffer.from(chunk).toString("utf8");

        let newlineIndex;

        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {

            const line = buffer.slice(0, newlineIndex).trim();

            buffer = buffer.slice(newlineIndex + 1);

            if (!line) continue;

            const data = JSON.parse(line);

            const token = data.message?.content;

            if (token) {
                res.write(token);
            }
        }
    }

    if (buffer.trim()) {

        const data = JSON.parse(buffer);

        const token = data.message?.content;

        if (token) {
            res.write(token);
        }
    }

    res.end();
}

// Online Groq streaming
async function streamGroq(message, res) {

    if (!GROQ_API_KEY) {
        throw new Error("GROQ_API_KEY is missing.");
    }

    const response = await fetch(GROQ_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`
        },

        body: JSON.stringify({

            model: GROQ_MODEL,

            stream: true,

            temperature: 0.5,

            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: message
                }
            ]
        })
    });

    if (!response.ok) {

        const errorText = await response.text();

        console.error("Groq error:", errorText);

        throw new Error("Groq API request failed.");
    }

    setStreamHeaders(res);

    const decoder = new TextDecoder();

    let buffer = "";

    for await (const chunk of response.body) {

        buffer += decoder.decode(chunk, {
            stream: true
        });

        const lines = buffer.split("\n");

        buffer = lines.pop() || "";

        for (const line of lines) {

            if (!line.startsWith("data:")) continue;

            const dataText = line.slice(5).trim();

            if (!dataText || dataText === "[DONE]") {
                continue;
            }

            const data = JSON.parse(dataText);

            const token =
                data.choices?.[0]?.delta?.content;

            if (token) {
                res.write(token);
            }
        }
    }

    res.end();
}

// Main Chat API
app.post("/api/chat", async (req, res) => {

    const { message } = req.body;

    if (
        typeof message !== "string" ||
        !message.trim()
    ) {
        return res.status(400).json({
            error: "Please enter your recipe question."
        });
    }

    try {

        if (AI_PROVIDER === "groq") {

            await streamGroq(message.trim(), res);

        } else if (AI_PROVIDER === "ollama") {

            await streamOllama(message.trim(), res);

        } else {

            return res.status(500).json({
                error: "Invalid AI provider configuration."
            });
        }

    } catch (error) {

        console.error("AI connection error:", error.message);

        if (res.headersSent) {
            return res.end();
        }

        res.status(500).json({
            error:
                AI_PROVIDER === "groq"
                    ? "Could not connect to Groq AI."
                    : "Could not connect to local Ollama. Please check whether Ollama is running."
        });
    }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

    console.log(`AI Provider: ${AI_PROVIDER}`);

    if (AI_PROVIDER === "groq") {
        console.log(`Groq model: ${GROQ_MODEL}`);
    } else {
        console.log(`Ollama model: ${OLLAMA_MODEL}`);
    }
});