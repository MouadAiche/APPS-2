// GETTING DOM ELEMENTS
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const hamburgerIcon = document.getElementById('hamburger-icon')

// EXPANDE THE SIDEBAR
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    
    // Change icon
    if (sidebar.classList.contains('expanded')) {
      hamburgerIcon.innerHTML = '&#10005;'; // X icon
    } else {
      hamburgerIcon.innerHTML = '&#9776;'; // Hamburger icon
    }
});

// COLLAPSING THE SIDEBAR IF CLICKING OUTSIDE
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('expanded');
        hamburgerIcon.innerHTML = '&#9776;';
    }
});

// NAVIGATION
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const target = this.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// MULTI-CONVERTER-1
// GET DOM ELEMENTS
const weight = document.getElementById("weight");
const length = document.getElementById("length");
const currency = document.getElementById("currency");
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const label1 = document.getElementById("label-1");
const input1 = document.getElementById("input-1");
const label2 = document.getElementById("label-2");
const input2 = document.getElementById("input-2");


weight.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'WEIGHT CONVERTER';
    label1.textContent = 'KG'
    label2.textContent = 'G'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
length.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'LENGTH CONVERTER';
    label1.textContent = 'CM'
    label2.textContent = 'INCHES'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
currency.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'CURRENCY CONVERTER';
    label1.textContent = 'MAD'
    label2.textContent = 'USD'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
input1.addEventListener("input", () => {
  const value = parseFloat(input1.value);
  if (isNaN(value)) {
    input2.value = '';
    return;
  }

  switch (title.textContent) {
    case 'CURRENCY CONVERTER':
      input2.value = (value / 10).toFixed(2);
      break;
    case 'LENGTH CONVERTER':
      input2.value = (value / 2.54).toFixed(2);
      break;
    case 'WEIGHT CONVERTER':
      input2.value = (value * 1000).toFixed(2);
      break;
  }
});

input2.addEventListener("input", () => {
  const value = parseFloat(input2.value);
  if (isNaN(value)) {
    input1.value = '';
    return;
  }

  switch (title.textContent) {
    case 'CURRENCY CONVERTER':
      input1.value = (value * 10).toFixed(2);
      break;
    case 'LENGTH CONVERTER':
      input1.value = (value * 2.54).toFixed(2);
      break;
    case 'WEIGHT CONVERTER':
      input1.value = (value / 1000).toFixed(2);
      break;
  }
});


// NUMBER-GUESSING-GAME
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