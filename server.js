
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const OLLAMA_URL = "http://127.0.0.1:11434/api/chat";
const MODEL = "qwen2.5:1.5b";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Veg Recipes by Roopa AI Assistant is running!",
        model: MODEL
    });
});

// Real AI chat API using Ollama
app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    if (typeof message !== "string" || !message.trim()) {
        return res.status(400).json({
            error: "Please enter your recipe question."
        });
    }

    const systemPrompt = `
You are the AI Recipe Assistant for Veg Recipes by Roopa.

Rules:
1. Help with vegetarian cooking and vegetarian recipes only.
2. Reply in the same language as the user's latest message.
3. If the user asks in English, reply in English.
   If the user asks in Telugu, reply in Telugu.
   Follow the same rule for other languages you understand.
4. Give recipe name, servings, preparation time, cooking time,
   ingredients with quantities, numbered preparation steps,
   and useful cooking tips when relevant.
5. If servings are not specified, assume 2 servings and say so.
6. If ingredients are provided, prioritize recipes using them.
7. Clearly mention optional ingredients and substitutions.
8. Never claim that you used an ingredient the user did not provide
   unless you identify it as an additional ingredient.
9. Keep instructions practical, clear, and easy to follow.
10. Do not claim to be a human chef.
`;

    try {
        const ollamaResponse = await fetch(OLLAMA_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: MODEL,
                stream: true,
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: message.trim()
                    }
                ],
                options: {
                    temperature: 0.5
                }
            })
        });

        if (!ollamaResponse.ok) {
            const errorText = await ollamaResponse.text();

            console.error("Ollama error:", errorText);

            return res.status(502).json({
                error: "Ollama could not process the request. Check that Ollama is running and gemma3:4b is available."
            });
        }

        res.setHeader("Content-Type", "text/plain; charset=utf-8");
res.setHeader("Cache-Control", "no-cache");
res.setHeader("X-Accel-Buffering", "no");

let buffer = "";

for await (const chunk of ollamaResponse.body) {
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
    } catch (error) {
        console.error("AI connection error:", error.message);

        res.status(500).json({
            error: "Could not connect to Ollama. Please make sure Ollama is running on this laptop."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Ollama model configured: ${MODEL}`);
});
