import Language from '../../utils/Language';
import useWeatherCard from './useWeatherCard';
import Button from '../button/Button';

import './weather_card.scss';

// Interface to define props
interface Props {
  weatherIcon: string;
  weatherDescription: string;
  weatherTemperature: number;
  weatherTempMax: number;
  weatherTempMin: number;
  weatherRainProb: number;
  selectedCityName: string;
  date: string;
  languageSelected: Language;
  showModal: () => void;
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
  selectedCityName,
  date,
  showModal,
} : Props) {
  const {
    displayedCity,
  } = useWeatherCard(languageSelected, selectedCityName);

  // Main return
  return (
    <div className="weather-card">
      <div className="weather-info">
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
            <div className="weather-category">
              <img src="assets/temp-max.png" alt="max-temp" />
              <span>
                {weatherTempMax}
                ºC
              </span>
            </div>
          </div>
          <div className="min-temp">
            <span>{(languageSelected).minTempSpan}</span>
            <div className="weather-category">
              <img src="assets/temp-min.png" alt="min-temp" />
              <span>
                {weatherTempMin}
                ºC
              </span>
            </div>
          </div>
          <div className="rain-prob">
            <span>{(languageSelected).rainProbSpan}</span>
            <div className="weather-category">
              <img src="assets/raindrop.png" alt="rain-prob" />
              <span>
                {weatherRainProb}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="city-info">
        <div className="city-info-card">
          <h1>{displayedCity}</h1>
          <span className="date">{date}</span>
        </div>
        <div className="show-more">
          <Button
            styleButton="full-report-button"
            handleClick={showModal}
            textContent="+"
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
