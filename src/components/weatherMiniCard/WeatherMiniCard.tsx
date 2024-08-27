import './weather-mini-card.scss';

// Interface to define props
interface Props {
  weatherIcon: string;
  weatherTemperature: number;
  weatherRainProb: number;
  date: string;
}

// Destructuring and hook initialization
function WeatherMiniCard({
  weatherIcon,
  weatherTemperature,
  weatherRainProb,
  date,
} : Props) {
  // Made this to make sure that the first letter of the displayed day is in upper case.
  const upperCaseDate = date.charAt(0).toUpperCase() + date.slice(1);

  // Main return
  return (
    <div className="weather-mini-card">
      <div className="first-row">
        <h1>{upperCaseDate}</h1>
        <img src={`../../../public/assets/${weatherIcon}.png`} alt="weather-icon" />
      </div>
      <div className="second-row">
        <div className="temperature">
          <div className="first-row">
            <img src="../../public/assets/temperature.png" alt="temperature" />
          </div>
          <div className="second-row">
            <span>
              {weatherTemperature}
              º C
            </span>
          </div>
        </div>
        <div className="rain-prob">
          <div className="first-row">
            <img src="../../public/assets/raindrop.png" alt="raindrop" />
          </div>
          <div className="second-row">
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

export default WeatherMiniCard;
