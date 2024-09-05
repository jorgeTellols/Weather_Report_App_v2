import './weather_widget.scss';
import Language from '../../utils/Language';
import ClientError from '../../views/clientError/ClientError';
import ServerError from '../../views/serverError/ServerError';
import Spinner from '../../components/spinner/Spinner';
import WeatherMiniCard from '../../components/weatherMiniCard/WeatherMiniCard';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import WeatherCityInfoCard from '../../components/weatherCityInfoCard/WeatherCityInfoCard';
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
}: Props) {
  const {
    clientError,
    serverError,
    todayWeather,
    weatherDay1,
    weatherDay2,
    weatherDay3,
    weatherDay4,
    weatherDay5,
    weatherDay6,
  } = useWeatherWidget({ selectedCityName, languageSelected });

  // Condition to display error screens, a loading screen or the weather report
  let content;

  if (serverError) {
    content = <ServerError languageSelected={languageSelected} />;
  } else if (clientError) {
    content = <ClientError languageSelected={languageSelected} />;
  } else if (!todayWeather || !weatherDay1 || !weatherDay2
    || !weatherDay3 || !weatherDay4
    || !weatherDay5 || !weatherDay6) {
    content = <Spinner />;
  } else {
    content = (
      <>
        <div className="first-row">
          <WeatherCard
            languageSelected={languageSelected}
            weatherIcon={todayWeather.icon}
            weatherDescription={todayWeather.description}
            weatherTemperature={todayWeather.temperature}
            weatherTempMax={todayWeather.tempMax}
            weatherRainProb={todayWeather.rainProb}
            weatherTempMin={todayWeather.tempMin}
          />
          <WeatherCityInfoCard
            languageSelected={languageSelected}
            selectedCityName={selectedCityName}
            date={todayWeather.date}
          />
        </div>
        <div className="second-row">
          <WeatherMiniCard
            weatherIcon={weatherDay1.icon}
            weatherTemperature={weatherDay1.temperature}
            weatherRainProb={weatherDay1.rainProb}
            date={weatherDay1.date}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay2.icon}
            weatherTemperature={weatherDay2.temperature}
            weatherRainProb={weatherDay2.rainProb}
            date={weatherDay2.date}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay3.icon}
            weatherTemperature={weatherDay3.temperature}
            weatherRainProb={weatherDay3.rainProb}
            date={weatherDay3.date}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay4.icon}
            weatherTemperature={weatherDay4.temperature}
            weatherRainProb={weatherDay4.rainProb}
            date={weatherDay4.date}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay5.icon}
            weatherTemperature={weatherDay5.temperature}
            weatherRainProb={weatherDay5.rainProb}
            date={weatherDay5.date}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay6.icon}
            weatherTemperature={weatherDay6.temperature}
            weatherRainProb={weatherDay6.rainProb}
            date={weatherDay6.date}
          />
        </div>
      </>
    );
  }

  // Main return
  return <div className="weather-widget">{content}</div>;
}

export default WeatherReport;
