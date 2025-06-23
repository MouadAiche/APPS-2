// GETTING DOM ELEMENTS
const Singledigitone = document.getElementById("Single-digit-one");
const Twodigitone = document.getElementById("Two-digit-one");
const Threedigitone = document.getElementById("Three-digit-one");
const Singledigittwo = document.getElementById("Single-digit-two");
const Twodigittwo = document.getElementById("Two-digit-two");
const Threedigittwo = document.getElementById("Three-digit-two");
const submit = document.getElementById("submit");
const answerInput = document.getElementById("answer");

// DISPLAY TARGET
const spans = document.querySelectorAll(".span-container span");

// RANDOM NUMBER GENERATION
function generateRandom(digits) {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNCTION TO SET NEW NUMBERS BASED ON SELECTED RADIO BUTTONS
function regenerateNumbers() {
  // First number
  if (Singledigitone.checked) spans[0].textContent = generateRandom(1);
  if (Twodigitone.checked) spans[0].textContent = generateRandom(2);
  if (Threedigitone.checked) spans[0].textContent = generateRandom(3);

  // Second number
  if (Singledigittwo.checked) spans[2].textContent = generateRandom(1);
  if (Twodigittwo.checked) spans[2].textContent = generateRandom(2);
  if (Threedigittwo.checked) spans[2].textContent = generateRandom(3);
}

// LISTEN TO RADIO CHANGES TO SET INITIAL NUMBERS
Singledigitone.addEventListener('click', regenerateNumbers);
Twodigitone.addEventListener('click', regenerateNumbers);
Threedigitone.addEventListener('click', regenerateNumbers);
Singledigittwo.addEventListener('click', regenerateNumbers);
Twodigittwo.addEventListener('click', regenerateNumbers);
Threedigittwo.addEventListener('click', regenerateNumbers);

// CHECK ANSWER

let operation = 0;
let correctoperations = 0;
let incorrectoperations = 0;

// DISPLAY RESULTS
const resultoperations = document.getElementById("operations");
const resultcorrect = document.getElementById("correct");
const resultinccorect = document.getElementById("inccorect");

submit.addEventListener('click', () => {
  const answer = parseInt(answerInput.value);
  const number1 = parseInt(spans[0].textContent);
  const number2 = parseInt(spans[2].textContent);
  const correct = number1 + number2;

  if (answer === correct) {
    correctoperations++;
    operation++;
    regenerateNumbers();                  // Generate new question
    answerInput.value = "";               // Clear input
    answerInput.focus();                  // Focus back on input
    resultoperations.textContent = `Number of operations : ${operation}`
    resultcorrect.textContent = `Number of correct operations : ${correctoperations}`
    resultinccorect.textContent = `Number of inccorect operations : ${incorrectoperations}`
  } else {
    incorrectoperations++;
    operation++;
    alert("❌ Incorrect! Try again.");
    answerInput.focus();
    answerInput.value = "";
  }
});


// ENTER KEY = SUBMIT
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit.classList.add("active");
    setTimeout(() => submit.classList.remove("active"), 300);
    submit.click();
  }
});