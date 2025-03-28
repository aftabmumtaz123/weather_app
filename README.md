# 🌦️ Weather App

A simple and beautiful weather app built with **Node.js**, **Express**, and **EJS** that fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Features

- 🌍 Search for current weather in any city
- 📦 Uses OpenWeatherMap API to fetch real-time data
- ✨ Minimal glassmorphism UI with EJS templating
- ⚠️ Displays user-friendly error messages for invalid cities
- 🔁 Handles city name replacement (e.g., "Rahim Yar Khan" → "Naushahra")

---

## 📸 Preview

![Weather App Preview]![image](https://github.com/user-attachments/assets/d67e7462-7ff1-4178-adc1-9bd01be2328c)
  

---

## 🧑‍💻 Tech Stack

- Node.js
- Express
- EJS (Embedded JavaScript Templates)
- CSS (with a glassmorphism-inspired UI)
- OpenWeatherMap API

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aftabmumtaz123/weather_app.git
   cd weather_app
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file in the root directory:

env
Copy
Edit
open_weather_api=your_openweathermap_api_key
Run the app

bash
Copy
Edit
node app.js
Visit it in your browser
Navigate to: http://localhost:3000

🌐 Example Search
Try typing:

London

New York

Lahore

Rahim Yar Khan (automatically maps to Naushahra)

🛠️ Notes
Make sure to replace your_openweathermap_api_key in .env with your actual API key from OpenWeatherMap.

This project uses a small logic tweak to rename "Rahim Yar Khan" to "Naushahra" due to API limitations.

🤝 Contributing
Feel free to fork, open issues, or submit pull requests. Suggestions are welcome!

📄 License
This project is open-source and available under the MIT License.

📫 Contact
Made with ❤️ by Aftab Mumtaz

yaml
Copy
Edit

---

You can save this as `README.md` in your project folder. Want me to create a LICENSE file too?
