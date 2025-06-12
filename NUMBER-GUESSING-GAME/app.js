// DOM elements
const minInput = document.getElementById("mininput");
const maxInput = document.getElementById("maxinput");
const getStartBtn = document.getElementById("getstart");
const mainPage = document.querySelector(".mainpage");
const gameAlert = document.querySelector(".gamealert");
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check");
const h1 = document.getElementById("h1");
const doneText = document.getElementById("done");
const resultText = document.getElementById("result");

let min, max, randomNumber, attempts;

// Start the game
getStartBtn.addEventListener("click", () => {
    min = parseInt(minInput.value);
    max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter a valid minimum and maximum range.");
        return;
    }

    // Generate a random number between min and max
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;

    // Show game section, keep main page visible
    gameAlert.style.display = "block";
    h1.textContent = `Guess a number between ${min} and ${max}`;
    resultText.textContent = "";
    doneText.textContent = "";
    guessInput.value = "";
    checkBtn.disabled = false;
});

// Check the guess
checkBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        resultText.textContent = "Please enter a valid number.";
        return;
    }

    attempts++;

    if (guess < randomNumber) {
        resultText.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        resultText.textContent = "Too high! Try again.";
    } else {
        resultText.textContent = `Correct! The number was ${randomNumber}.`;
        doneText.textContent = `You guessed it in ${attempts} attempts.`;
        checkBtn.disabled = true;
    }

    guessInput.value = "";
});