import { useState } from 'react';
import './weather_widget.scss';
import Language from '../../utils/Language';
import ClientError from '../../views/clientError/ClientError';
import ServerError from '../../views/serverError/ServerError';
// import WeatherCityInfoCard from '../../components/weatherCityInfoCard/WeatherCityInfoCard';
import WeatherMiniCard from '../../components/weatherMiniCard/WeatherMiniCard';
// import WeatherCard from '../../components/weatherCard/WeatherCard';
import useWeatherWidget from './useWeatherWidget';

// Interface to define props
interface Props {
  selectedCityName: string,
  languageSelected: Language
}
// Destructuring and hook initialization
function WeatherReport({
  selectedCityName,
  languageSelected,
} : Props) {
  const {
    clientError,
    serverError,
  } = useWeatherWidget({ selectedCityName, languageSelected });

  const nextDay = {
    date: '28-03-1998',
    icon: '01d',
    temperature: 88,
    rainProb: 1,
  };

  // const [weatherToday] = useState(getData);
  const [weatherDay1] = useState(nextDay);
  const [weatherDay2] = useState(nextDay);
  const [weatherDay3] = useState(nextDay);
  const [weatherDay4] = useState(nextDay);
  const [weatherDay5] = useState(nextDay);
  const [weatherDay6] = useState(nextDay);
  // const [currentWeather, setCurrentWeather] = useState("");

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
          {/* <WeatherCard
            languageSelected={languageSelected}
            weatherIcon={weatherToday.getIcon()}
            weatherDescription={weatherToday.getDescription()}
            weatherTemperature={Math.round(weatherToday.getTemperature())}
            weatherTempMax={Math.round(weatherToday.getTempMax())}
            weatherRainProb={(weatherToday.getRainProb()) * 100}
            weatherTempMin={Math.round(weatherToday.getTempMin())}
          /> */}
          {/* <WeatherCityInfoCard
            selectedCityName={selectedCityName}
            date={weatherToday.getDate()}
            time="22:00"
          /> */}
        </div>
        <div className="second-row">
          <WeatherMiniCard
            weatherIcon={weatherDay1.icon}
            weatherTemperature={Math.round(weatherDay1.temperature)}
            weatherRainProb={weatherDay1.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay2.icon}
            weatherTemperature={Math.round(weatherDay2.temperature)}
            weatherRainProb={weatherDay2.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay3.icon}
            weatherTemperature={Math.round(weatherDay3.temperature)}
            weatherRainProb={weatherDay3.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay4.icon}
            weatherTemperature={Math.round(weatherDay4.temperature)}
            weatherRainProb={weatherDay4.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay5.icon}
            weatherTemperature={Math.round(weatherDay5.temperature)}
            weatherRainProb={weatherDay5.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
          <WeatherMiniCard
            weatherIcon={weatherDay6.icon}
            weatherTemperature={Math.round(weatherDay6.temperature)}
            weatherRainProb={weatherDay6.rainProb * 100}
              // date={formatDate(weatherDay3.date, true)}
            date="12/30"
          />
        </div>
      </>
    );
  }

  // Main return
  return (<div className="weather-widget">{ content }</div>);
}

export default WeatherReport;
