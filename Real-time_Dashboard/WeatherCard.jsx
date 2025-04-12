import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="card mt-4 mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-body text-center">
        <h4 className="card-title">{data.city}</h4>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.condition}
        />
        <h5>{data.condition}</h5>
        <p className="card-text">
          🌡️ {data.temperature}°C<br />
          💧 Humidity: {data.humidity}%<br />
          🌬️ Wind Speed: {data.windSpeed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;