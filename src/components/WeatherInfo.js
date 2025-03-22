import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>{weather.name}, {weather.sys.country}</h2>
      
      {/* Weather Condition Cards */}
      <div className="weather-cards">
        <div className="card temperature">
          <i className="fas fa-thermometer-half"></i>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
        </div>
        <div className="card humidity">
          <i className="fas fa-tint"></i>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
        <div className="card cloudiness">
          <i className="fas fa-cloud"></i>
          <p>Cloudiness: {weather.clouds.all}%</p>
        </div>
        <div className="card rain">
          <i className="fas fa-cloud-showers-heavy"></i>
          <p>Rain: {weather.rain ? weather.rain['1h'] : 0} mm</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
