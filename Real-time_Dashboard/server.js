const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const weatherRoute = require('./routes/weather');

app.use(cors());
app.use(express.json());

app.use('/weather', weatherRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('🌤️ Weather API is running. Use /weather?city=CityName');
});
