import './weather_widget.scss';
import Language from '../../utils/Language';
import ClientError from '../../views/clientError/ClientError';
import ServerError from '../../views/serverError/ServerError';
import Spinner from '../../components/spinner/Spinner';
import WeatherMiniCard from '../../components/weatherMiniCard/WeatherMiniCard';
import WeatherCard from '../../components/weatherCard/WeatherCard';
import useWeatherWidget from './useWeatherWidget';
import Weather from './Weather/Weather';

// Interface to define props
interface Props {
  selectedCityName: string;
  languageSelected: Language;
  showModal: (weatherReport: Weather | null) => void;
}

// Destructuring and hook initialization
function WeatherWidget({
  selectedCityName,
  languageSelected,
  showModal,
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
    weekWeatherReport,
  } = useWeatherWidget({ selectedCityName, languageSelected });

  // Condition to display error screens, a loading screen or the weather report
  let content;

  if (serverError) {
    content = <ServerError languageSelected={languageSelected} />;
  } else if (clientError) {
    content = <ClientError languageSelected={languageSelected} />;
  } else if (!todayWeather || !weatherDay1 || !weatherDay2 || !weatherDay3
  || !weatherDay4 || !weatherDay5 || !weatherDay6) {
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
            selectedCityName={selectedCityName}
            date={todayWeather.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[0] : null);
            }}
          />
        </div>
        <div className="second-row">
          <WeatherMiniCard
            weatherIcon={weatherDay1.icon}
            weatherTemperature={weatherDay1.temperature}
            weatherRainProb={weatherDay1.rainProb}
            date={weatherDay1.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[1] : null);
            }}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay2.icon}
            weatherTemperature={weatherDay2.temperature}
            weatherRainProb={weatherDay2.rainProb}
            date={weatherDay2.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[2] : null);
            }}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay3.icon}
            weatherTemperature={weatherDay3.temperature}
            weatherRainProb={weatherDay3.rainProb}
            date={weatherDay3.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[3] : null);
            }}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay4.icon}
            weatherTemperature={weatherDay4.temperature}
            weatherRainProb={weatherDay4.rainProb}
            date={weatherDay4.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[4] : null);
            }}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay5.icon}
            weatherTemperature={weatherDay5.temperature}
            weatherRainProb={weatherDay5.rainProb}
            date={weatherDay5.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[5] : null);
            }}
          />
          <WeatherMiniCard
            weatherIcon={weatherDay6.icon}
            weatherTemperature={weatherDay6.temperature}
            weatherRainProb={weatherDay6.rainProb}
            date={weatherDay6.date}
            showModal={() => {
              showModal(weekWeatherReport ? weekWeatherReport[6] : null);
            }}
          />
        </div>
      </>
    );
  }

  // Main return
  return <div className="weather-widget">{content}</div>;
}

export default WeatherWidget;
