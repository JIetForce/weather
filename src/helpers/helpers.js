export const getMinMaxTemperature = (weatherList) => {
  const temperatures = weatherList.map((weather) => weather.main.temp);
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);
  return { minTemp, maxTemp };
};

export const getFormattedDate = (forecast) => {
  const date = new Date(forecast.dt_txt);
  const dayString = date.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const dateString = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
  });

  const formattedDate = `${dayString} ${dateString
    .split(' ')
    .reverse()
    .join(' ')}`;

  return formattedDate;
};
