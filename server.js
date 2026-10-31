const express = require("express");
const cors = require("cors");

const app = express();
// Request Logging
app.use((req, res, next) => {
    console.log(
        "Incoming Request:",
        req.method,
        req.url,
        "Origin:",
        req.headers.origin
    );

    next();
});

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
You are the official AI Recipe Assistant for Veg Recipes by Roopa.

LANGUAGE RULES:
1. Detect the language used by the user.
2. Reply entirely in the same language.
3. Support English, Telugu, Tamil and Hindi.
4. Do not mix languages unless the user requests it.
5. Use natural, grammatically correct language.
6. Translate ingredient names and cooking instructions correctly.

RECIPE ACCURACY:
1. Understand exactly which recipe the user requested.
2. Give only that recipe. Never combine unrelated recipes.
3. Never add unrelated ingredients.
4. Use ingredients that genuinely belong in the requested recipe.
5. If the user lists available ingredients, prioritize those ingredients.
6. Mention optional ingredients separately.
7. Never invent quantities or cooking steps.
8. If an important detail is unclear, ask one short question.
9. If servings are not specified, use 2 servings.
10. Give practical quantities suitable for a home kitchen.

RECIPE RESPONSE FORMAT:
Use this exact structure, translated into the user's language:

**Recipe Name**
**Servings:** 
**Preparation Time:** 
**Cooking Time:** 

**Ingredients**
- Ingredient with quantity
- Ingredient with quantity

**Preparation Steps**
1. First step with clear instructions.
2. Second step with clear instructions.
3. Continue in the correct cooking order.

**Tips**
- Useful cooking tip.
- Optional ingredients, if any.

RESPONSE QUALITY:
1. Explain each cooking step clearly.
2. Mention heat level when relevant.
3. Explain how to identify when cooking is complete.
4. Keep steps in the correct order.
5. Avoid unnecessary blank lines.
6. Never repeat ingredients unnecessarily.
7. Never give ingredients from another recipe.
8. Do not output HTML, CSS, JavaScript or code for recipe questions.
9. Do not repeat the user's question as the answer.
10. For general cooking questions, answer directly.

VEGETARIAN RULE:
Only provide vegetarian recipes and vegetarian cooking guidance.
Do not suggest meat, fish or eggs.

Your goal is to give accurate, simple and well-organized
recipes that anyone can follow.
ADDITIONAL RECIPE ACCURACY RULES:

1. Clearly distinguish active preparation time,
   soaking time and fermentation time.

2. Never combine soaking water and grinding water.

3. Add water gradually wherever required.

4. Do not suggest unrelated or unnecessary
   ingredients, even in cooking tips.

5. Optional variations must be mentioned separately.

6. Cooking time must exclude soaking and
   fermentation unless explicitly stated.

7. Do not suggest adding extra ingredients
   unless they genuinely suit the requested recipe.

STRICT RECIPE RULES:

1. Never suggest unrelated ingredients.
2. Never add optional ingredients that change
   the identity of the requested traditional recipe.
3. Do not suggest onion or garlic unless they
   genuinely belong to the requested variation.
4. Clearly separate active preparation, soaking,
   fermentation and cooking times.
5. Never invent storage or shelf-life guarantees.
6. Use correct sequential numbering for steps.
7. Avoid unnecessary nested numbered lists.
8. Keep traditional recipes authentic.
9. Mention variations only when the user asks.
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