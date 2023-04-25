import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import WeatherList from './WeatherList';

const Weather = ({
  city,
  searchCityInput,
  weatherData,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div className="weather">
      <SearchForm
        value={searchCityInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <WeatherList
        city={city}
        searchCityInput={searchCityInput}
        weatherData={weatherData}
      />
    </div>
  );
};

export default Weather;
