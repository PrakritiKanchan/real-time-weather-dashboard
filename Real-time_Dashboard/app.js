import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(res.data);
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h2>Weather Dashboard</h2>
      <SearchBar onSearch={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;  

