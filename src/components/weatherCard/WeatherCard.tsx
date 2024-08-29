import './weather_card.scss';
import Language from '../../utils/Language';

// Interface to define props
interface Props {
  weatherIcon: string;
  weatherDescription: string;
  weatherTemperature: number;
  weatherTempMax: number;
  weatherTempMin: number;
  weatherRainProb: number;
  languageSelected: Language;
}

// Destructuring and hook initialization
function WeatherCard({
  weatherIcon,
  weatherDescription,
  weatherTemperature,
  weatherTempMax,
  weatherTempMin,
  weatherRainProb,
  languageSelected,
} : Props) {
  // Main return
  return (
    <div className="weather-card">
      <div className="first-row">
        <img src={`../assets/${weatherIcon}.png`} alt={weatherDescription} />
        <h1>
          {weatherTemperature}
          ºC
        </h1>
      </div>
      <div className="second-row">
        <p>{weatherDescription}</p>
      </div>
      <div className="third-row">
        <div className="max-temp">
          <span>{(languageSelected).maxTempSpan}</span>
          <div className="weather-info">
            <img src="../../../public/assets/temp-max.png" alt="max-temp" />
            <span>
              {weatherTempMax}
              ºC
            </span>
          </div>
        </div>
        <div className="min-temp">
          <span>{(languageSelected).minTempSpan}</span>
          <div className="weather-info">
            <img src="../../../public/assets/temp-min.png" alt="min-temp" />
            <span>
              {weatherTempMin}
              ºC
            </span>
          </div>
        </div>
        <div className="rain-prob">
          <span>{(languageSelected).rainProbSpan}</span>
          <div className="weather-info">
            <img src="../../../public/assets/raindrop.png" alt="rain-prob" />
            <span>
              {weatherRainProb}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
