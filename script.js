
"use strict";

// ========================================
// VEG RECIPES BY ROOPA
// Recipe data
// ========================================

const recipes = {
    biryani: {
        name: "Vegetable Biryani",
        category: "Rice & Biryani",
        time: "40–45 minutes",
        servings: 3,
        type: "with-onion-garlic",
        description: "Aromatic vegetable biryani made with basmati rice and Indian spices.",

        ingredients: [
            "Basmati rice – 1½ cups",
            "Carrot – 1 medium",
            "Beans – 8 to 10",
            "Potato – 1 small",
            "Green peas – ¼ cup",
            "Onions – 2 medium",
            "Tomatoes – 2 medium",
            "Green chillies – 2",
            "Ginger-garlic paste – 1 tablespoon",
            "Curd – ¼ cup",
            "Mint leaves – ½ cup",
            "Coriander leaves – ¼ cup",
            "Biryani masala – 1 teaspoon",
            "Oil – 2 tablespoons",
            "Ghee – 1 tablespoon",
            "Water – approximately 1½ to 1¾ cups, adjusted as needed",
            "Salt – to taste"
        ],

        steps: [
            "Wash the basmati rice and soak it for 15–20 minutes. Drain the water.",
            "Heat oil and ghee in a pressure cooker. Add bay leaf, cardamom, cloves, cinnamon and cumin.",
            "Add sliced onions and green chillies. Fry until the onions turn golden.",
            "Add ginger-garlic paste and cook until its raw smell disappears.",
            "Add chopped vegetables and tomatoes. Cook for 3–4 minutes.",
            "Add turmeric, chilli powder, biryani masala, salt, curd, mint and coriander. Mix well.",
            "Add drained rice and the measured hot water. Mix gently without breaking the rice.",
            "Close the cooker and cook according to your cooker's instructions and the rice variety. Allow the pressure to release naturally before opening."
        ],

        tips: [
            "Avoid adding too much water, as it can make the rice mushy.",
            "Use fresh mint and coriander for better aroma.",
            "Do not open the pressure cooker while it is still pressurized.",
            "Serve hot with onion raita."
        ]
    },

    paneer: {
        name: "Paneer Butter Masala",
        category: "Curries",
        time: "30 minutes",
        servings: 3,
        type: "with-onion-garlic",
        description: "Soft paneer cubes in a rich, creamy tomato gravy.",

        ingredients: [
            "Paneer – 250 g",
            "Tomatoes – 3 medium",
            "Onion – 1 medium",
            "Ginger-garlic paste – 1 teaspoon",
            "Butter – 2 tablespoons",
            "Oil – 1 teaspoon",
            "Cream – 2 tablespoons",
            "Kashmiri chilli powder – 1 teaspoon",
            "Garam masala – ½ teaspoon",
            "Kasuri methi – 1 teaspoon",
            "Salt – to taste",
            "Water – approximately ½ to ¾ cup"
        ],

        steps: [
            "Chop the tomatoes and onion.",
            "Heat oil and a little butter in a pan. Sauté the onion and ginger-garlic paste.",
            "Add tomatoes and chilli powder. Cook until the tomatoes soften.",
            "Cool the mixture slightly, blend until smooth, and return it to the pan.",
            "Add water as needed and simmer for 5–7 minutes.",
            "Add paneer cubes, garam masala and salt. Simmer gently for 3–5 minutes.",
            "Stir in cream, crushed kasuri methi and the remaining butter.",
            "Serve hot with chapati, naan or rice."
        ],

        tips: [
            "Do not overcook paneer, as it can become rubbery.",
            "Blend the gravy well for a smooth restaurant-style texture.",
            "Adjust cream and chilli powder to your taste."
        ]
    },

    idli: {
        name: "Idli & Sambar",
        category: "Breakfast",
        time: "25 minutes steaming; batter preparation and fermentation take longer",
        servings: 3,
        type: "no-onion-garlic",
        description: "Soft steamed idlis served with traditional sambar.",

        ingredients: [
            "Prepared idli batter – 3 cups",
            "Oil – a little for greasing the moulds",
            "Toor dal – ½ cup",
            "Tomato – 1",
            "Mixed vegetables – 1 cup",
            "Sambar powder – 1 to 2 teaspoons",
            "Tamarind pulp – 1 tablespoon, or to taste",
            "Turmeric – ¼ teaspoon",
            "Mustard seeds – ½ teaspoon",
            "Curry leaves – a few",
            "Salt – to taste"
        ],

        steps: [
            "Lightly grease the idli moulds.",
            "Pour fermented idli batter into each mould.",
            "Steam for approximately 10–12 minutes, or until cooked.",
            "Pressure-cook the toor dal with turmeric until soft.",
            "Cook the vegetables and tomato until tender.",
            "Add tamarind pulp, sambar powder, salt and cooked dal. Simmer until the flavors combine.",
            "Prepare a tempering with mustard seeds and curry leaves, then add it to the sambar.",
            "Serve the hot idlis with sambar."
        ],

        tips: [
            "Do not overfill the idli moulds.",
            "Let the idlis rest for a couple of minutes before removing them.",
            "Check packaged sambar powder ingredients if avoiding onion and garlic strictly."
        ]
    },

    poha: {
        name: "Vegetable Poha",
        category: "Breakfast",
        time: "20 minutes",
        servings: 3,
        type: "no-onion-garlic",
        description: "A quick breakfast made with flattened rice, vegetables and mild spices.",

        ingredients: [
            "Thick poha – 2 cups",
            "Potato – 1 small, diced",
            "Green peas – ¼ cup",
            "Green chilli – 1",
            "Mustard seeds – ½ teaspoon",
            "Cumin seeds – ¼ teaspoon",
            "Turmeric – ¼ teaspoon",
            "Oil – 1 tablespoon",
            "Curry leaves – a few",
            "Lemon juice – 1 tablespoon",
            "Coriander leaves – 2 tablespoons",
            "Salt – to taste"
        ],

        steps: [
            "Rinse the poha briefly in a sieve and drain well.",
            "Heat oil in a pan. Add mustard seeds, cumin, curry leaves and green chilli.",
            "Add diced potato and peas. Cover and cook until tender, adding a splash of water if necessary.",
            "Add turmeric and salt.",
            "Add the softened poha and mix gently.",
            "Cook on low heat for 2–3 minutes.",
            "Turn off the heat and add lemon juice and coriander leaves.",
            "Serve warm."
        ],

        tips: [
            "Use thick poha for a better texture.",
            "Do not soak poha for too long, or it may become mushy.",
            "Check the ingredient labels of any packaged spice mixes."
        ]
    },

    samosa: {
        name: "Vegetable Samosa",
        category: "Snacks",
        time: "45–60 minutes",
        servings: 3,
        type: "no-onion-garlic",
        description: "Crispy pastry filled with spiced potato and peas.",

        ingredients: [
            "All-purpose flour – 1 cup",
            "Potatoes – 2 medium",
            "Green peas – ¼ cup",
            "Oil or ghee for the dough – 2 tablespoons",
            "Cumin seeds – ½ teaspoon",
            "Coriander powder – ½ teaspoon",
            "Garam masala – ¼ teaspoon",
            "Green chilli – 1, finely chopped",
            "Salt – to taste",
            "Water – as needed for the dough",
            "Oil – for deep frying"
        ],

        steps: [
            "Mix flour, salt and oil. Add water gradually to make a firm dough.",
            "Boil the potatoes, peel them and mash roughly.",
            "Heat a little oil in a pan. Add cumin, chilli, peas and spices.",
            "Add the potatoes and salt. Mix and allow the filling to cool.",
            "Divide the dough into balls and roll each into an oval.",
            "Cut each oval in half and shape it into a cone.",
            "Fill with the potato mixture and seal the edges with water.",
            "Deep-fry on medium-low heat until crisp and golden, ensuring the pastry cooks through."
        ],

        tips: [
            "Keep the dough firm rather than soft.",
            "Cool the filling before stuffing.",
            "Fry in batches without overcrowding the pan."
        ]
    },

    payasam: {
        name: "Semiya Payasam",
        category: "Sweets",
        time: "25 minutes",
        servings: 3,
        type: "no-onion-garlic",
        description: "A comforting Indian dessert made with vermicelli and milk.",

        ingredients: [
            "Vermicelli – ½ cup",
            "Milk – 3 cups",
            "Sugar – ¼ to ⅓ cup, to taste",
            "Ghee – 1 tablespoon",
            "Cashews – 8 to 10",
            "Raisins – 1 tablespoon",
            "Cardamom powder – ¼ teaspoon"
        ],

        steps: [
            "Heat ghee in a pan and fry the cashews and raisins. Set aside.",
            "In the same pan, roast the vermicelli until lightly golden if it is not pre-roasted.",
            "Add milk and simmer, stirring occasionally, until the vermicelli is soft.",
            "Add sugar and stir until dissolved.",
            "Add cardamom powder and the fried nuts and raisins.",
            "Simmer briefly, then serve warm or chilled."
        ],

        tips: [
            "Stir regularly to prevent the milk from sticking to the pan.",
            "Payasam thickens as it cools; add a little warm milk if needed.",
            "Adjust sugar according to your preference."
        ]
    },
    
    "ragi-balls": {
        name: "Ragi Balls",
        category: "Roopa Special",
        time: "30 minutes + 10 minutes steaming",
        servings: 3,
        type: "no-onion-garlic",
        description: "Traditional ragi balls prepared with cumin, urad dal, green chillies and fresh moringa leaves.",

        ingredients: [
            "Ragi flour – 1 cup",
            "Water – 2 cups",
            "Cumin seeds – 1 teaspoon",
            "Urad dal – 1 teaspoon",
            "Green chillies – 1 to 2",
            "Fresh moringa leaves – 1 handful",
            "Oil – 1 teaspoon",
            "Salt – to taste"
        ],

        steps: [
            "Heat a little oil in a pan.",
            "Add cumin seeds, urad dal and chopped green chillies. Fry lightly.",
            "Add the fresh moringa leaves and sauté until they soften.",
            "Pour in 2 cups of water and add salt. Bring to a boil.",
            "Gradually add 1 cup of ragi flour, stirring continuously to avoid lumps.",
            "Cook and stir for approximately 5 minutes until the mixture thickens.",
            "Allow the mixture to cool enough to handle safely. Shape into small balls.",
            "Steam the balls for about 10 minutes, or until cooked through."
        ],

        tips: [
            "Stir continuously while adding the ragi flour to prevent lumps.",
            "Handle the mixture carefully; let it cool enough before shaping.",
            "Serve warm with peanut chutney."
        ]
    },

    "peanut-chutney": {
        name: "Peanut Chutney",
        category: "Roopa Special",
        time: "15 minutes",
        servings: 3,
        type: "no-onion-garlic",
        description: "A flavorful peanut chutney with roasted groundnuts, green chillies, curry leaves and tomato.",

        ingredients: [
            "Peanuts – 1 cup",
            "Green chillies – 1 to 2",
            "Cumin seeds – ½ teaspoon",
            "Curry leaves – 1 sprig",
            "Tomato – 1 medium",
            "Oil – 2 teaspoons",
            "Tamarind – a small piece, or to taste",
            "Salt – to taste",
            "Water – as needed"
        ],

        steps: [
            "Dry-roast the peanuts on low heat until cooked and aromatic. Set aside to cool.",
            "Heat a little oil in the same pan.",
            "Add green chillies, cumin seeds and curry leaves. Fry carefully.",
            "Remove and set these ingredients aside.",
            "Add the tomato to the pan and cook until softened.",
            "Allow the cooked ingredients to cool.",
            "Grind the peanuts, fried chillies, cumin, curry leaves and tomato together.",
            "Add tamarind and salt to taste. Add water gradually and grind to your preferred consistency.",
            "Taste and adjust salt and tamarind before serving."
        ],

        tips: [
            "Roast peanuts on low heat so they cook evenly without burning.",
            "Let hot ingredients cool before grinding.",
            "Add water gradually to control the chutney consistency."
        ]
    }

};


// ========================================
// ELEMENT REFERENCES
// ========================================


"use strict";

// ========================================
// ELEMENT REFERENCES
// Keep your existing recipes object above.
// ========================================

const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category");
const recipeCards = document.querySelectorAll(".recipe-card");
const recipeCount = document.getElementById("recipeCount");
const emptyMessage = document.getElementById("emptyMessage");

const recipeModal = document.getElementById("recipeModal");
const recipeDetails = document.getElementById("recipeDetails");
const closeModal = document.getElementById("closeModal");

let selectedCategory = "all";
let currentRecipeId = null;
let currentServings = 3;

// ========================================
// QUANTITY CONVERSION
// Supports decimals, mixed fractions and
// common Unicode fractions.
// ========================================

function parseQuantity(value) {
    const fractions = {
        "½": 0.5,
        "¼": 0.25,
        "¾": 0.75,
        "⅓": 1 / 3,
        "⅔": 2 / 3,
        "⅛": 0.125,
        "⅜": 0.375,
        "⅝": 0.625,
        "⅞": 0.875
    };

    const text = value.trim();

    // Examples: 1½, 2 ¼, ½, 1.5
    const match = text.match(
        /^(\d+(?:\.\d+)?\s*)?([½¼¾⅓⅔⅛⅜⅝⅞])$/
    );

    if (match) {
        return Number(match[1] || 0) + fractions[match[2]];
    }

    const decimal = text.match(/^\d+(?:\.\d+)?$/);

    if (decimal) {
        return Number(text);
    }

    return null;
}

function formatQuantity(number) {
    if (number === 0) return "0";

    const rounded = Math.round(number * 100) / 100;

    // Display common fractions more naturally.
    const whole = Math.floor(rounded);
    const fraction = rounded - whole;

    const commonFractions = [
        [1 / 8, "⅛"],
        [1 / 4, "¼"],
        [1 / 3, "⅓"],
        [3 / 8, "⅜"],
        [1 / 2, "½"],
        [5 / 8, "⅝"],
        [2 / 3, "⅔"],
        [3 / 4, "¾"],
        [7 / 8, "⅞"]
    ];

    for (const [value, symbol] of commonFractions) {
        if (Math.abs(fraction - value) < 0.015) {
            return whole > 0
                ? `${whole}${symbol}`
                : symbol;
        }
    }

    if (Math.abs(fraction) < 0.015) {
        return String(whole);
    }

    return String(rounded);
}

// ========================================
// SCALE INGREDIENT QUANTITIES
// Original ingredient strings stay intact.
// ========================================

function scaleIngredient(ingredient, baseServings, targetServings) {
    const parts = ingredient.split(/\s+[–—-]\s+/);

    if (parts.length < 2) {
        return ingredient;
    }

    const name = parts[0].trim();
    const quantityText = parts.slice(1).join(" – ").trim();

    // Leave "to taste" and unquantified ingredients unchanged.
    if (/^(to taste|as needed|a little|a few)\b/i.test(quantityText)) {
        return ingredient;
    }

    const multiplier = targetServings / baseServings;

    // Scale each numeric amount in the quantity description.
    // Handles examples such as:
    // 1½ cups, 2 tablespoons, 1 to 2 teaspoons.
    const quantityPattern =
        /\d+\s*[½¼¾⅓⅔⅛⅜⅝⅞]|[½¼¾⅓⅔⅛⅜⅝⅞]|\d+(?:\.\d+)?/g;

    let foundQuantity = false;

    const scaledText = quantityText.replace(
        quantityPattern,
        (matched, offset, fullText) => {
            // Avoid scaling a number that is part of a word.
            const before = fullText.slice(0, offset);

            if (/[A-Za-z]$/.test(before)) {
                return matched;
            }

            const amount = parseQuantity(matched);

            if (amount === null) {
                return matched;
            }

            foundQuantity = true;

            return formatQuantity(amount * multiplier);
        }
    );

    if (!foundQuantity) {
        return ingredient;
    }

    return `${name} – ${scaledText}`;
}

// ========================================
// SEARCH AND CATEGORY FILTERING
// ========================================

function filterRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    recipeCards.forEach((card) => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category;
        const type = card.dataset.type;

        const matchesSearch = card.textContent
            .toLowerCase()
            .includes(searchTerm) || name.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            (selectedCategory === "no-onion-garlic"
                ? type === "no-onion-garlic"
                : category === selectedCategory);

        const shouldShow = matchesSearch && matchesCategory;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }
    });

    recipeCount.textContent =
        `${visibleCount} recipe${visibleCount === 1 ? "" : "s"}`;

    emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterRecipes);

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        filterRecipes();

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// ========================================
// RENDER RECIPE DETAILS
// ========================================

function renderRecipe() {
    const recipe = recipes[currentRecipeId];

    if (!recipe) return;

    const ingredients = recipe.ingredients
        .map((ingredient) => {
            const scaled = scaleIngredient(
                ingredient,
                recipe.servings || 3,
                currentServings
            );

            return `<li>${scaled}</li>`;
        })
        .join("");

    const steps = recipe.steps
        .map((step) => `<li>${step}</li>`)
        .join("");

    const tips = recipe.tips
        .map((tip) => `<li>${tip}</li>`)
        .join("");

    recipeDetails.innerHTML = `
        <p class="eyebrow">VEG RECIPES BY ROOPA</p>
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>

        <div class="serving-panel">
            <div>
                <strong>Adjust servings</strong>
                <p>Ingredient quantities update automatically.</p>
            </div>

            <div class="serving-controls">
                <button
                    type="button"
                    id="decreaseServings"
                    aria-label="Decrease servings"
                    ${currentServings <= 1 ? "disabled" : ""}
                >−</button>

                <label for="servingInput" class="sr-only">
                    Number of servings
                </label>

                <input
                    id="servingInput"
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value="${currentServings}"
                    aria-label="Number of servings"
                >

                <button
                    type="button"
                    id="increaseServings"
                    aria-label="Increase servings"
                    ${currentServings >= 100 ? "disabled" : ""}
                >+</button>

                <span>people</span>
            </div>
        </div>

        <div class="recipe-meta">
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Cooking time:</strong> ${recipe.time}</p>
            <p><strong>Servings:</strong> ${currentServings} people</p>
        </div>

        <h3>Ingredients for ${currentServings} people</h3>
        <ul class="ingredient-list">${ingredients}</ul>

        <h3>Preparation Steps</h3>
        <ol>${steps}</ol>

        <h3>Roopa's Cooking Tips</h3>
        <ul>${tips}</ul>
    `;

    // Connect serving controls after rendering.
    const servingInput = document.getElementById("servingInput");
    const decreaseButton = document.getElementById("decreaseServings");
    const increaseButton = document.getElementById("increaseServings");

    function updateServings(value) {
        const servings = Number(value);

        if (!Number.isInteger(servings) || servings < 1 || servings > 100) {
            return;
        }

        currentServings = servings;
        renderRecipe();
    }

    servingInput.addEventListener("change", () => {
        updateServings(servingInput.value);
    });

    decreaseButton.addEventListener("click", () => {
        updateServings(currentServings - 1);
    });

    increaseButton.addEventListener("click", () => {
        updateServings(currentServings + 1);
    });
}

// ========================================
// OPEN RECIPE
// ========================================

function showRecipe(recipeId) {
    if (!recipes[recipeId]) return;

    currentRecipeId = recipeId;
    currentServings = recipes[recipeId].servings || 3;

    renderRecipe();

    recipeModal.hidden = false;
    document.body.classList.add("modal-open");
    closeModal.focus();
}

document.querySelectorAll(".view-recipe").forEach((button) => {
    button.addEventListener("click", () => {
        showRecipe(button.dataset.recipe);
    });
});

// ========================================
// CLOSE RECIPE
// ========================================

function hideRecipe() {
    recipeModal.hidden = true;
    document.body.classList.remove("modal-open");
}

closeModal.addEventListener("click", hideRecipe);

recipeModal.addEventListener("click", (event) => {
    if (event.target === recipeModal) {
        hideRecipe();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !recipeModal.hidden) {
        hideRecipe();
    }
});

// ========================================
// INITIAL DISPLAY
// ========================================

filterRecipes();
// ========================================
// ROOPA'S AI CHEF - CHATBOT FUNCTIONALITY
// ========================================

const chatContainer = document.getElementById("chat-window");
const chatToggle = document.getElementById("chat-toggle");

chatToggle.addEventListener("click", () => {
    chatContainer.hidden = false;
    chatContainer.classList.remove("minimized", "maximized");
    chatToggle.setAttribute("aria-expanded", "true");
    chatInput.focus();
});
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

const chatMinimize = document.getElementById("chat-minimize");
const chatMaximize = document.getElementById("chat-maximize");
const chatClose = document.getElementById("chat-close");

// Display chat messages
// function addChatMessage(message, className) {
//     const messageDiv = document.createElement("div");

//     messageDiv.className = className;
//     messageDiv.textContent = message;

//     chatMessages.appendChild(messageDiv);

//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// ========================================
// SAFE MARKDOWN FORMATTING FOR AI RESPONSES
// ========================================

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[char];
    });
}

function formatAIResponse(text) {
    const lines = text.split(/\r?\n/);
    let html = "";
    let listType = null;

    function closeList() {
        if (listType) {
            html += `</${listType}>`;
            listType = null;
        }
    }

    lines.forEach((line) => {
        let safeLine = escapeHTML(line.trim());

        if (!safeLine) {
            closeList();
            return;
        }

        // Bold text
        safeLine = safeLine.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );

        // Headings
        if (/^#{1,3}\s/.test(safeLine)) {
            closeList();
            safeLine = safeLine.replace(/^#{1,3}\s/, "");
            html += `<h3>${safeLine}</h3>`;
            return;
        }

        // Bullet points
        if (/^[-*]\s/.test(safeLine)) {
            if (listType !== "ul") {
                closeList();
                html += "<ul>";
                listType = "ul";
            }

            html += `<li>${safeLine.replace(/^[-*]\s/, "")}</li>`;
            return;
        }

        // Numbered steps
        if (/^\d+[.)]\s/.test(safeLine)) {
            if (listType !== "ol") {
                closeList();
                html += "<ol>";
                listType = "ol";
            }

            html += `<li>${safeLine.replace(/^\d+[.)]\s/, "")}</li>`;
            return;
        }

        closeList();
        html += `<p>${safeLine}</p>`;
    });

    closeList();

    return html;
}

// Display chat messages
function addChatMessage(message, className) {
    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Send message to AI backend

async function sendChatMessage() {
    const message = chatInput.value.trim();

    if (!message) return;

    addChatMessage(message, "user-message");

    chatInput.value = "";
    chatInput.focus();

    const loadingMessage = document.createElement("div");
    loadingMessage.className = "bot-message";
    loadingMessage.textContent = "🥗 Roopa's AI Chef is thinking...";
    chatMessages.appendChild(loadingMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const response = await fetch("https://veg-recipes-by-roopa.onrender.com/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error("Unable to connect to AI Chef.");
        }

        loadingMessage.textContent = "";

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let botReply = "";

        while (true) {
            const { value, done } = await reader.read();

            if (done) break;

            botReply += decoder.decode(value, { stream: true });

            loadingMessage.innerHTML = formatAIResponse(botReply);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        botReply += decoder.decode();

        loadingMessage.innerHTML = botReply.trim()
            ? formatAIResponse(botReply.trim())
            : "Sorry, I couldn't understand that. Please try again.";

    } catch (error) {
        loadingMessage.remove();

        addChatMessage(
            "Sorry! I couldn't connect to the AI Chef. Please check whether the AI server is running.",
            "bot-message"
        );

        console.error("Chatbot Error:", error);
    }
}

// Send button
chatSend.addEventListener("click", sendChatMessage);

// Enter key
chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendChatMessage();
    }
});
    

// ========================================
// CHAT WINDOW CONTROLS
// ========================================

// Minimize chat window
chatMinimize.addEventListener("click", () => {
    chatContainer.classList.remove("maximized");
    chatContainer.classList.add("minimized");
});

// Maximize and restore chat window
chatMaximize.addEventListener("click", () => {
    if (chatContainer.classList.contains("minimized")) {
        chatContainer.classList.remove("minimized");
        return;
    }

    chatContainer.classList.toggle("maximized");
});

// Close chat window
chatClose.addEventListener("click", () => {
    chatContainer.hidden = true;
    chatContainer.classList.remove("minimized", "maximized");
    chatToggle.setAttribute("aria-expanded", "false");
    chatToggle.focus();
});