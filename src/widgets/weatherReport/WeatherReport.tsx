import { useState } from 'react';
import './weather_report.scss';
import Language from '../../utils/Language';
import ClientError from '../../views/clientError/ClientError';
import ServerError from '../../views/serverError/ServerError';
import WeatherCityInfoCard from '../../components/weatherCityInfoCard/WeatherCityInfoCard';
import WeatherMiniCard from '../../components/weatherMiniCard/WeatherMiniCard';
import WeatherCard from '../../components/weatherCard/WeatherCard';
// import CityInfoWeatherCard from '../components/c-cityInfoWeatherCard';

// Interface to define props
interface Props {
  // selectedCityName: string,
  languageSelected: Language
}
// Destructuring and hook initialization
function WeatherReport({
  // selectedCityName,
  languageSelected,
} : Props) {
  const weather = {
    date: '28-03-1998',
    icon: '01d',
    description: 'Cloudy',
    temperature: 0,
    tempMax: 0,
    tempMin: 0,
    rainProb: 0,
    timeZone: 'America/Chicago',
  };

  const nextDay = {
    date: '28-03-1998',
    icon: '01d',
    temperature: 0,
    rainProb: 0,
  };
  const [clientError] = useState(false);
  const [serverError] = useState(false);
  const [currentWeather] = useState(weather);
  const [weatherDay1] = useState(nextDay);
  const [weatherDay2] = useState(nextDay);
  const [weatherDay3] = useState(nextDay);
  const [weatherDay4] = useState(nextDay);
  const [weatherDay5] = useState(nextDay);
  const [weatherDay6] = useState(nextDay);
  const [selectedCityName] = useState('london');

  // const [selectedCityName, setSelectedCityName] = useState(props.selectedCityName);
  // const [clientError, setClientError] = useState(false);
  // const [serverError, setServerError] = useState(true);
  // const [currentWeather, setCurrentWeather] = useState("");
  // const [weatherDay1, setWeatherDay1] = useState("");
  // const [weatherDay2, setWeatherDay2] = useState("");
  // const [weatherDay3, setWeatherDay3] = useState("");
  // const [weatherDay4, setWeatherDay4] = useState("");
  // const [weatherDay5, setWeatherDay5] = useState("");
  // const [weatherDay6, setWeatherDay6] = useState("");

  // Condition to display error screens or the weather report
  let content;

  if (serverError) {
    content = <ServerError languageSelected={languageSelected} />;
  } else if (clientError) {
    content = <ClientError languageSelected={languageSelected} />;
  } else {
    content = (
      <>
        <div className="first-row">
          <WeatherCard
            languageSelected={languageSelected}
            weatherIcon={currentWeather.icon}
            weatherDescription={currentWeather.description}
            weatherTemperature={Math.round(currentWeather.temperature)}
            weatherTempMax={Math.round(currentWeather.tempMax)}
            weatherRainProb={(currentWeather.rainProb) * 100}
            weatherTempMin={Math.round(currentWeather.tempMin)}
          />
          <WeatherCityInfoCard
            selectedCityName={selectedCityName}
            date="28-03-1998"
            time="22:00"
          />
        </div>
        <div className="second-row">
          <WeatherMiniCard
            weatherIcon={weatherDay1.icon}
            weatherTemperature={Math.round(weatherDay1.temperature)}
            weatherRainProb={weatherDay1.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay2.icon}
            weatherTemperature={Math.round(weatherDay2.temperature)}
            weatherRainProb={weatherDay2.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay3.icon}
            weatherTemperature={Math.round(weatherDay3.temperature)}
            weatherRainProb={weatherDay3.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay4.icon}
            weatherTemperature={Math.round(weatherDay4.temperature)}
            weatherRainProb={weatherDay4.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay5.icon}
            weatherTemperature={Math.round(weatherDay5.temperature)}
            weatherRainProb={weatherDay5.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay6.icon}
            weatherTemperature={Math.round(weatherDay6.temperature)}
            weatherRainProb={weatherDay6.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="28-03-1998"
          />
        </div>
      </>
    );
  }

  // Main return
  return (<div className="weather-widget">{ content }</div>);
}

export default WeatherReport;
