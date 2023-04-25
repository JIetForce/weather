import React from 'react';

const WeatherItem = ({ date, weatherData }) => {
  return (
    <div className="weather-list-item" key={date}>
      <h2>{date}</h2>
      <ul className='weather-list-item__details'>
        {weatherData[date].map((forecast) => (
          <li className="" key={forecast.dt}>
            <p>{forecast.dt_txt.split(' ')[1]}</p>
            <p>{forecast.main.temp} °C</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherItem;
