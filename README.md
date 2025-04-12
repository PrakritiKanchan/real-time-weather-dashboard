# 🌤️ Real-Time Weather Dashboard

A full-stack weather dashboard built using the **MERN stack** (MongoDB, Express, React, Node.js) that allows users to search for any city and view **live weather data** using the [OpenWeatherMap API](https://openweathermap.org/).

---

## 🚀 Features

- 🌎 Search weather by **city name**
- 🌤️ Shows **temperature, humidity, wind speed**, and **weather icon**
- 🔄 Real-time weather data via OpenWeatherMap
- 💡 Error handling for invalid or empty city names
- 📱 Responsive and clean UI

---

## 🛠️ Tech Stack

**Frontend**:
- React
- Axios
- CSS / Bootstrap

**Backend**:
- Node.js
- Express.js
- Axios
- CORS
- dotenv

---

## 📁 Project Structure

weather-dashboard/
├── client/ # React Frontend │ 
├── src/ │ │ ├── components/ │ 
│ │ ├── SearchBar.jsx │ │ │ 
└── WeatherCard.jsx │ │
├── App.js │ │ └── index.js │ 
└── package.json 
├── server/ # Node.js + Express Backend │
├── routes/ │ │ └── weather.js │
├── server.js │ └── package.json
├── .env # API Key (not uploaded to GitHub)
├── .gitignore 
└── README.md
