import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const App = () => {
  // List of districts in Tamil Nadu
  const districts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 
    'Erode', 'Kallakurichi', 'Kancheepuram', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 
    'Kanyakumari', 'Namakkal', 'Perambalur', 'Pudukottai', 'Ramanathapuram', 'Ranipet', 'Salem', 
    'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 
    'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 
    'Virudhunagar'
  ];

  const [query, setQuery] = useState(''); // State for search input
  const [weatherData, setWeatherData] = useState(null); // State for storing weather data

  const apiKey = 'a410913b4d4e89cbedc6aebb82719431'; // Your OpenWeather API key

  // Function to fetch weather data based on district
  const fetchWeather = async (district) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${district},IN&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Fallback to static weather data if the API call fails.
      setWeatherData({
        name: district,
        main: { temp: 28, humidity: 70 },
        clouds: { all: 10 },
        rain: null,
        weather: [{ description: 'Clear sky' }],
      });
    }
  };

  // Search function to handle the search query and fetch weather data
  const search = () => {
    const trimmedQuery = query.trim().toLowerCase();
    const district = districts.find((dist) => dist.toLowerCase() === trimmedQuery);

    if (district) {
      fetchWeather(district); // Fetch the weather data if the district is found
    } else {
      setWeatherData({
        name: 'Unknown District',
        main: { temp: 0, humidity: 0 },
        clouds: { all: 0 },
        rain: null,
        weather: [{ description: 'No data available' }],
      });
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <SearchBar query={query} setQuery={setQuery} search={search} />
      
      {/* Displaying weather data if available */}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Cloudiness: {weatherData.clouds.all}%</p>
          <p>Rain: {weatherData.rain ? `${weatherData.rain['1h']} mm` : 'No rain'}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
