# 🔄 MULTI-CONVERTER TOOL

A versatile **HTML**, **CSS**, and **JavaScript** project that converts between different units of weight, length, and currency. This interactive application features a clean interface and real-time conversion calculations.

---

## 📺 Live Demo

🔗 [LIVE DEMO](https://multi-converter-brown.vercel.app/)

---

## 🛠️ Features

- 🌐 Three conversion modes: Weight, Length, and Currency
- ⚡ Real-time bidirectional conversion
- ✅ Automatic input validation
- 🎯 Precise decimal formatting (2 decimal places)
- 🎨 Clean, modern UI with responsive design
- 🔄 Dynamic interface that changes based on selected conversion type

---

## 📁 Project Structure

📦 multi-converter  
├── index.html  
├── style.css  
├── app.js  
└── README.md  

---

## 🧠 How It Works

- **HTML** provides:
  - Radio button selector for conversion type
  - Dynamic input fields that appear after selection
  - Clean card-based layout

- **CSS** features:
  - Gradient background
  - Responsive card components
  - Smooth transitions
  - Mobile-friendly design

- **JavaScript**:
  - Listens for radio button selections
  - Dynamically updates UI labels and titles
  - Performs real-time conversions:
    - Weight: kg ↔ g
    - Length: cm ↔ inches
    - Currency: MAD ↔ USD (sample rate)
  - Handles input validation and formatting

---

## 📊 Conversion Formulas

### WEIGHT
1 kg = 1000 g
1 g = 0.001 kg


### LENGTH
1 inch = 2.54 cm
1 cm = 0.393701 inches


### CURRENCY (Sample)
1 USD = 10 MAD
1 MAD = 0.1 USD

---

## 🧰 Tech Stack

- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, responsive design)
- **JavaScript** (Vanilla ES6, DOM manipulation)

---

## 🚀 Usage

1. Select conversion type (Weight/Length/Currency)
2. Enter value in either field
3. See instant conversion in the other field
4. Works bidirectionally for all conversion types
5. Empty fields automatically clear the opposite field

---

## 📜 License

This project is open-source and free to use.

---

## 💡 Learning Points

- Dynamic UI updates based on user selection
- Multiple conversion types in one application
- Real-time two-way data binding
- Responsive design principles
- Clean JavaScript architecture with switch statements
