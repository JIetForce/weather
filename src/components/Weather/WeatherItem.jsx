import React from 'react';

import { FaArrowCircleDown } from 'react-icons/fa';
const WeatherItem = ({ weatherData }) => {
  return (
    <div className="weather-list-item">
      <ul className="weather-list-item__details">
        {weatherData.map((forecast) => (
          <li className="weather-list-item__details-item" key={forecast.dt}>
            <p className="weather-list-item__details-item-date">
              {forecast.dt_txt.split(' ')[1].slice(0, -3)}
            </p>
            <p>{+forecast.main.temp?.toFixed(1)} °C</p>
            <img
              title={forecast.weather[0].description}
              alt={forecast.weather[0].description}
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            />
            <div className="weather-list-item__details-item-wind">
              <FaArrowCircleDown
                style={{ transform: `rotate(${forecast.wind.deg}deg)` }}
              />
              <p>{forecast.wind.speed?.toFixed(1)} m/s</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherItem;
