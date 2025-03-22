import React, { useState } from 'react';

const WeatherApp = ({ districts, onSearch }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleSearch = () => {
    if (selectedDistrict) {
      onSearch(selectedDistrict); // Trigger the search function passed from App.js
    }
  };

  return (
    <div
      className="weather-app"
      style={{
        backgroundImage: 'url(https://tse2.mm.bing.net/th?id=OIP.pnpeK_0GV1i0wVsi1Om_WwHaEH&pid=Api&P=0&h=180)',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="search-container">
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value="">Select a district</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default WeatherApp;
