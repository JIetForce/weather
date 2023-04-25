import React from 'react';
import WeatherItem from './WeatherItem';
import { getMinMaxTemperature } from '../../helpers/helpers';

const WeatherList = ({ city, weatherData }) => {
  const [selectedDate, setSelectedDate] = React.useState('');

  if (Object.keys(weatherData)[0] && !selectedDate) {
    setSelectedDate(Object.keys(weatherData)[0]);
  }

  console.log(weatherData);
  return (
    <div className="weather-wrapper">
      <h2>{city}</h2>
      <ul className="weather-date-tabs">
        {Object.entries(weatherData).map(([date, weatherList]) => {
          const { minTemp, maxTemp } = getMinMaxTemperature(weatherList);

          return (
            <li
              key={date}
              className={`weather-date-tabs__item ${
                date === selectedDate ? 'selected' : ''
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date.split(' ').map((day) => {
                return <span key={day}>{day}</span>;
              })}
              <div className="weather-date-tabs__item-details">
                <span className="weather-date-tabs__item-details-temp">
                  <span className="weather-date-tabs__item-details-temp-label">min</span>
                  {minTemp + '°'}
                </span>
                <span className="weather-date-tabs__item-details-temp">
                  <span className="weather-date-tabs__item-details-temp-label">max</span>
                  {maxTemp + '°'}
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
            <WeatherItem key={date} date={date} weatherData={weatherData} />
          ))}
      </div>
    </div>
  );
};

export default WeatherList;
