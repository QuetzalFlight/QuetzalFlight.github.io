// Typewriter effect for the header
const header = document.getElementById("welcome-header");
const typewriter = new Typewriter(header, {
    loop: false,
    delay: 75,
});

typewriter
    .typeString("Welcome!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// Handle input and tumbling text
const input = document.getElementById("user-input");
const button = document.getElementById("submit-button");
const backgroundText = document.getElementById("background-text");

button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
        const word = document.createElement("div");
        word.className = "background-word";
        word.textContent = text;
        word.style.left = `${Math.random() * 80}%`;
        backgroundText.appendChild(word);

        // Remove the word after animation ends
        setTimeout(() => {
            backgroundText.removeChild(word);
        }, 3000);

        input.value = ""; // Clear the input field
    }
});