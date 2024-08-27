import './weather_city_info_card.scss';

// Interface to define props
interface Props {
  selectedCityName: string;
  date: string;
  time: string;
}

// Destructuring and hook initialization
function WeatherCityInfoCard({
  selectedCityName,
  date,
  time,
} : Props) {
  // Made this to make sure that the first letter of the displayed day is in upper case.
  const upperCaseDate = date.charAt(0).toUpperCase() + date.slice(1);

  // Main return
  return (
    <div className="location-date">
      <h1>{selectedCityName}</h1>
      <h1 className="date">{upperCaseDate}</h1>
      <h1 className="date">{time}</h1>
    </div>
  );
}

export default WeatherCityInfoCard;
