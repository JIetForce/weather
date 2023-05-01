import { useCallback, useState, useEffect } from 'react';

import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { getFormattedDate } from './helpers/helpers';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [searchCityInput, setSearchCityInput] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = useCallback((data = 'kyiv') => {
    setIsLoading(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}&units=metric&cnt=40`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherByDay = {};

        data.list.forEach((forecast) => {
          const formattedDate = getFormattedDate(forecast);

          if (!weatherByDay[formattedDate]) {
            weatherByDay[formattedDate] = [];
          }
          weatherByDay[formattedDate].push(forecast);
        });

        const weatherWithoutLastDay = Object.fromEntries(
          Object.keys(weatherByDay)
            .slice(0, -1)
            .map((key) => [key, weatherByDay[key]])
        );

        setCity(data.city.name);
        setWeatherData(weatherWithoutLastDay);
        setSearchCityInput('');
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchCityInput.trim()) {
      return;
    }

    fetchWeather(searchCityInput);
  };

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const handleChange = (e) => {
    setSearchCityInput(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="weather-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Weather
            city={city}
            searchCityInput={searchCityInput}
            weatherData={weatherData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
