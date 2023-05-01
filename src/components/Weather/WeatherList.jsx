import React from 'react';
import WeatherItem from './WeatherItem';
import { getMinMaxTemperature } from '../../helpers/helpers';

const WeatherList = ({ city, weatherData }) => {
  const [selectedDate, setSelectedDate] = React.useState('');

  if (Object.keys(weatherData)[0] && !selectedDate) {
    setSelectedDate(Object.keys(weatherData)[0]);
  }

  return (
    <div className="weather-wrapper">
      <h2>{city}</h2>
      <ul className="weather-date-tabs">
        {Object.entries(weatherData).map(([date, weatherList]) => {
          const { minTemp, maxTemp } = getMinMaxTemperature(weatherList);
          const middleTime = Number.isInteger(weatherList.length / 2)
            ? weatherList[Math.floor(weatherList.length / 2)]
            : weatherList[0];

          return (
            <li
              key={date}
              className={`weather-date-tabs__item ${
                date === selectedDate ? 'active' : ''
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date.split(' ').map((day) => {
                return (
                  <span className="weather-date-tabs__item-date" key={day}>
                    {day}
                  </span>
                );
              })}
              <img
                className="weather-date-tabs__item-icon"
                title={middleTime.weather[0].description}
                alt={middleTime.weather[0].description}
                src={`http://openweathermap.org/img/wn/${middleTime.weather[0].icon}@2x.png`}
              />
              <div className="weather-date-tabs__item-details">
                <span className="weather-date-tabs__item-details-temp">
                  <span className="weather-date-tabs__item-details-temp-label">
                    min
                  </span>
                  {+minTemp?.toFixed(1) + '°'}
                </span>
                <span className="weather-date-tabs__item-details-temp">
                  <span className="weather-date-tabs__item-details-temp-label">
                    max
                  </span>
                  {+maxTemp?.toFixed(1) + '°'}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="weather-list">
        {Object.keys(weatherData)
          .filter((date) => date === selectedDate)
          .map((date) => (
            <WeatherItem key={date} weatherData={weatherData[date]} />
          ))}
      </div>
    </div>
  );
};

export default WeatherList;
