import './weather_mini_card.scss';
import Button from '../button/Button';

// Interface to define props
interface Props {
  weatherIcon: string;
  weatherTemperature: number;
  weatherRainProb: number;
  date: string;
  showModal: () => void;
}

// Destructuring and hook initialization
function WeatherMiniCard({
  weatherIcon,
  weatherTemperature,
  weatherRainProb,
  date,
  showModal,
} : Props) {
  // Main return
  return (
    <div className="weather-mini-card">
      <div className="first-row">
        <span>{date}</span>
        <img src={`assets/${weatherIcon}.png`} alt="weather-icon" />
      </div>
      <div className="second-row">
        <div className="temperature-mini-card">
          <img src="assets/temperature.png" alt="temperature" />
          <span>
            {weatherTemperature}
            ºC
          </span>
        </div>
        <div className="rain-prob-mini-card">
          <img src="assets/raindrop.png" alt="raindrop" />
          <span>
            {weatherRainProb}
            %
          </span>
        </div>
      </div>
      <div className="third-row">
        <Button styleButton="full-report-button" handleClick={showModal} textContent="+" />
      </div>
    </div>
  );
}

export default WeatherMiniCard;
