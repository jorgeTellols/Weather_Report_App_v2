import Weather from '../models/Weather';
import formatDate from '../utils/formatDate/formatDate';
import formatDescription from '../utils/formatDescription/formatDescription';
import Language from '../utils/Language';

// Service that calls the API and returns the weather in an array or an error number
async function weatherWidgetService(
  cityName: string,
  languageSelected: Language,
): Promise<Array<Weather> | number> {
  // Variable initialization
  const weeklyReportArr: Array<Weather> = [];
  let lat: string = '';
  let lon: string = '';
  const apiKey: string = '2b86aec52c83a8cee2493754f4579d58';

  // Condition that builds the url correctly
  if (cityName === 'london') {
    lat = '51.50';
    lon = '-0.11';
  } else if (cityName === 'toronto') {
    lat = '43.65';
    lon = '-79.34';
  } else if (cityName === 'singapore') {
    lat = '1.29';
    lon = '103.85';
  }

  const url: string = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&lang=${languageSelected.dataFormat}&units=metric&appid=${apiKey}`;

  // GET
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = response.status;
      throw new Error(error.toString());
    }

    const data = await response.json();

    //  Loop to GET the weather for the next 7 days (as an array)
    for (let k = 0; k <= 6; k += 1) {
      const weatherReport = new Weather(
        formatDate(data.daily[k].dt),
        data.daily[k].weather[0].icon,
        formatDescription(data.daily[k].weather[0].description),
        Math.round(data.current.temp),
        Math.round(data.daily[k].temp.max),
        Math.round(data.daily[k].temp.min),
        Math.round((data.daily[k].pop * 100)),
        data.daily[k].wind_speed,
        data.daily[k].humidity,
        data.daily[k].pressure,
      );
      weeklyReportArr.push(weatherReport);
    }
    return weeklyReportArr;
    // Catch to return the error code (as a number)
  } catch (error) {
    const statusCode = parseInt((error as Error).message, 10);
    return statusCode;
  }
}

export default weatherWidgetService;
