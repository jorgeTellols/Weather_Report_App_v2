import './weather_city_info_card.scss';
import useWeatherCityInfoCard from './useWeatherCityInfoCard';
import Language from '../../utils/Language';

// Interface to define props
interface Props {
  languageSelected: Language;
  selectedCityName: string;
  date: string;
}

// Destructuring and hook initialization
function WeatherCityInfoCard({
  languageSelected,
  selectedCityName,
  date,
}: Props) {
  const { displayedCity } = useWeatherCityInfoCard(languageSelected, selectedCityName);

  // Main return
  return (
    <div className="weather-city-info-card">
      <h1>{displayedCity}</h1>
      <h1 className="date">{date}</h1>
    </div>
  );
}

export default WeatherCityInfoCard;
