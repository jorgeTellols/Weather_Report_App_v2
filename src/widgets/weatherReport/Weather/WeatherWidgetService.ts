import Weather from './Weather';
import data from './prueba.json';
import formatDate from '../../../utils/formatDate/formatDate';

async function weatherWidgetService(
  cityName: string,
  language: string,
): Promise<Array<Weather> | number> {
  const weeklyReportArr: Array<Weather> = [];
  let url: string = '';
  const apiKey: string = '2b86aec52c83a8cee2493754f4579d5';
  // const apiKey: string = '2b86aec52c83a8cee2493754f4579d58';

  if ((cityName === 'London 💂🏻‍♀️') || (cityName === 'Londres 💂🏻‍♀️')) {
    url = `https://api.openweathermap.org/data/3.0/onecall?lat=51.50&lon=-0.11&exclude=hourly,minutely,alerts&lang=${language}&units=metric&appid=${apiKey}`;
  } if (cityName === 'Toronto 🍁') {
    url = `https://api.openweathermap.org/data/3.0/onecall?lat=43.65&lon=-79.34&exclude=hourly,minutely,alerts&lang=${language}&units=metric&appid=${apiKey}`;
  } else if ((cityName === 'Singapore 🏯') || (cityName === 'Singapur 🏯')) {
    url = `https://api.openweathermap.org/data/3.0/onecall?lat=1.29&lon=103.85&exclude=hourly,minutely,alerts&lang=${language}&units=metric&appid=${apiKey}`;
  }

  // GET

  try {
    // const response = await fetch(url);

    // if (!response.ok) {
    //   const error = response.status;
    //   throw new Error(error.toString());
    // }

    // const data = await response.json();

    //  Loop to GET the weather for the next 7 days
    for (let k = 0; k <= 6; k += 1) {
      const weatherReport = new Weather(
        formatDate(data.daily[k].dt),
        data.daily[k].weather[0].icon,
        data.daily[k].weather[0].description,
        data.current.temp,
        data.daily[k].temp.max,
        data.daily[k].temp.min,
        data.daily[k].pop,
        data.timezone,
        data.daily[k].wind_speed,
        data.daily[k].humidity,
        data.daily[k].pressure,
      );
      weeklyReportArr.push(weatherReport);
    }

    return weeklyReportArr;
    // Catch to return the error code
  } catch (error) {
    const statusCode = parseInt((error as Error).message, 10);
    return statusCode;
  }
}

export default weatherWidgetService;
