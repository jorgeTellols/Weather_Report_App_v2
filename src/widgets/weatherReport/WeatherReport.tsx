import { useState } from 'react';
import Language from '../../utils/Language';
import ClientError from '../../views/clientError/ClientError';
import ServerError from '../../views/serverError/ServerError';
// import WeatherCard from '../components/c-weatherCard';
// import MiniWeatherCard from '../components/c-miniWeatherCard';
// import CityInfoWeatherCard from '../components/c-cityInfoWeatherCard';

interface Props {
  // selectedCityName: string,
  languageSelected: Language
}

function WeatherReport({
  // selectedCityName,
  languageSelected,
} : Props) {
  // Hook section

  const [clientError] = useState(true);
  const [serverError] = useState(false);
  //   const [clientError, setClientError] = useState(false);
  //   const [serverError, setServerError] = useState(true);

  let content;

  if (serverError) {
    content = <ServerError languageSelected={languageSelected} />;
  } else if (clientError) {
    content = <ClientError languageSelected={languageSelected} />;
  } else {
    content = (
      <div className="weather-widget">
        {/* <div className="first-row">
        <WeatherCard
            selectedCityName={selectedCityName}
            languageSelected={languageSelected}
            weatherIcon={currentWeather.icon}
            weatherDescription={currentWeather.description}
            weatherTemperature={Math.round(currentWeather.temperature)}
            weatherTempMax={Math.round(currentWeather.tempMax)}
            weatherRainProb={(currentWeather.rainProb) * 100}
            weatherTempMin={Math.round(currentWeather.tempMin)}
        />
        <CityInfoWeatherCard
            languageSelected={languageSelected}
            selectedCityName={selectedCityName}
            date={formatDate(currentWeather.date)}
            time={formatTime(currentWeather.date)}
        />
        </div>
        <div className="second-row">
        <MiniWeatherCard
            minicardPosition="first-mini-card"
            languageSelected={languageSelected}
            weatherIcon={weatherDay1.icon}
            weatherTemperature={Math.round(weatherDay1.temperature)}
            weatherRainProb={weatherDay1.rainProb * 100}
            date={formatDate(weatherDay1.date, true)}
        />
        <MiniWeatherCard
            languageSelected={languageSelected}
            weatherIcon={weatherDay2.icon}
            weatherTemperature={Math.round(weatherDay2.temperature)}
            weatherRainProb={weatherDay2.rainProb * 100}
            date={formatDate(weatherDay2.date, true)}
        />
        <MiniWeatherCard
            languageSelected={languageSelected}
            weatherIcon={weatherDay3.icon}
            weatherTemperature={Math.round(weatherDay3.temperature)}
            weatherRainProb={weatherDay3.rainProb * 100}
            date={formatDate(weatherDay3.date, true)}
        />
        <MiniWeatherCard
            languageSelected={languageSelected}
            weatherIcon={weatherDay4.icon}
            weatherTemperature={Math.round(weatherDay4.temperature)}
            weatherRainProb={weatherDay4.rainProb * 100}
            date={formatDate(weatherDay4.date, true)}
        />
        <MiniWeatherCard
            languageSelected={languageSelected}
            weatherIcon={weatherDay5.icon}
            weatherTemperature={Math.round(weatherDay5.temperature)}
            weatherRainProb={weatherDay5.rainProb * 100}
            date={formatDate(weatherDay5.date, true)}
        />
        <MiniWeatherCard
            minicardPosition="last-mini-card"
            languageSelected={languageSelected}
            weatherIcon={weatherDay6.icon}
            weatherTemperature={Math.round(weatherDay6.temperature)}
            weatherRainProb={weatherDay6.rainProb * 100}
            date={formatDate(weatherDay6.date, true)}
        />
        </div> */}
      </div>
    );
  }
  return (<div>{content}</div>);
}

export default WeatherReport;
