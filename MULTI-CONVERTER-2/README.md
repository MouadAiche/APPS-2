# 🔄 MULTI-CONVERTER-2

An interactive and responsive **HTML**, **CSS**, and **JavaScript** project that lets you convert **weight**, **length**, and **currency** values on the fly. Great for beginners to practice radio-button selection, dynamic dropdown population, input validation, and DOM manipulation!

---

## 📺 Live Demo

🔗 [LIVE DEMO](https://multi-convertor-2.vercel.app/)

---

## 🛠️ Features

- ⚖️ **Weight**, 📏 **Length**, and 💱 **Currency** conversion modes  
- 🔄 Real-time two-way conversion between selected units  
- 📂 Dynamic `<select>` menus that update to relevant units for each mode  
- 🖱️ Clean radio-button UI to pick the conversion type  
- 🎨 Modern minimalist styling with smooth focus & hover effects  
- 📱 Fully responsive design for mobile and desktop devices  

---

## 📁 Project Structure

📦 MULTI-CONVERTER-2  
├── index.html  
├── style.css  
├── app.js  
└── README.md  

---

## 🧠 How It Works

- **HTML**  
  - Three radio buttons (`weight`, `length`, `currency`) let the user choose the converter mode.  
  - Two `<select>` elements and two numeric inputs form each conversion pair.  

- **CSS**  
  - Uses CSS custom properties, flexbox layouts, rounded “pill” components, and subtle shadows to create a clean, modern interface.  
  - Responsive tweaks ensure comfortable use on screens down to ~320 px wide.  

- **JavaScript** (`app.js`)  
  - **populateUnits(type)** fills both `<select>` menus with the correct unit list when a mode is chosen.  
  - **convert(type, value, from, to)** carries out the calculation using simple lookup tables for conversion rates.  
  - `input` events on both number fields trigger real-time updates, keeping values in sync in either direction.  
  - Basic validation clears the opposite field if the user input is invalid or empty.  

---

## 🧰 Tech Stack

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  

---

## 📜 License

This project is open-source and free to use.

---
