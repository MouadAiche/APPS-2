# ➕ Addition App

A simple and interactive **HTML**, **CSS**, and **JavaScript** based arithmetic game that helps users practice basic addition by customizing the number of digits for each operand. It's a great learning tool for children and beginners to improve their mental math skills.

---

## 📺 Live Demo

🔗 *[Add your live demo URL here]*

---

## 🛠️ Features

- 🔢 Select number of digits (1, 2, or 3) for both numbers
- 🧮 Random number generation based on digit selection
- ✍️ Enter answer and receive immediate validation
- ✅ Tracks correct and incorrect attempts
- 🎯 Keyboard support: Press **Enter** to submit
- 🎨 Clean and responsive user interface
- 📈 Displays live performance stats (total, correct, incorrect)

---

## 📁 Project Structure

📦 addition-app
├── index.html # Main HTML structure
├── style.css # UI styling and layout
├── app.js # App logic and interaction handling
└── README.md # Project documentation

---

## 🧠 How It Works

### 1. Digit Selection
- You choose how many digits each of the two numbers should have (Single, Two, or Three digits).
- Digit options appear as radio button labels.

### 2. Question Generation
- Based on your selections, two random numbers are generated and shown.
- Example: Choosing "Two Digit" and "Three Digit" may display: `47 + 258`

### 3. Answer Submission
- Input your answer in the field and click **Check** or press **Enter**.
- If correct:
  - 🎉 A new question is generated
  - ✅ Your correct count is updated
- If incorrect:
  - ❌ An alert notifies you
  - Your incorrect count increases
  - You can try again without changing the question

### 4. Result Summary
- Live feedback of:
  - Total number of operations
  - Number of correct answers
  - Number of incorrect answers

---

## 📱 Responsive UI

- Fully centered layout with elegant padding and shadow
- Labels styled as toggle buttons
- Input and button styled for accessibility and clarity
- Works well on desktops and tablets

---

## 🧰 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom-styled radio buttons, hover effects, responsive layout
- **JavaScript** — Random number generation, event handling, validation, score tracking

---

## 📜 License

This project is open-source and free to use for educational and personal projects.

---
