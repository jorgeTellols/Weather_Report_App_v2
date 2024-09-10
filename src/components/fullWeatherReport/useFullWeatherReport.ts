import Language from '../../utils/Language';
import Weather from '../../widgets/weatherWidget/Weather/Weather';

// Interface to define the props from the parent
interface Props {
  fullReport: Weather;
  languageSelected: Language
  selectedCityName: string;
}

// Custom hook to handle the logic of the WeatherCard component
function useFullWeatherReport(
  {
    fullReport,
    selectedCityName,
    languageSelected,
  }: Props,
) {
  // We build the object to use it the UI component
  const weather = {
    date: fullReport.getDate(),
    icon: fullReport.getIcon(),
    description: fullReport.getDescription(),
    temperature: fullReport.getTemperature(),
    tempMax: fullReport.getTempMax(),
    tempMin: fullReport.getTempMin(),
    rainProb: fullReport.getRainProb(),
    pressure: fullReport.getPressure(),
    humidity: fullReport.getHumidity(),
    windSpeed: fullReport.getWindSpeed(),
  };

  // Function that displays the city name in the correct language
  const getDisplayedCity = () => {
    if (selectedCityName === 'london') {
      return languageSelected.sidebarLondon;
    }
    if (selectedCityName === 'toronto') {
      return languageSelected.sidebarToronto;
    }
    if (selectedCityName === 'singapore') {
      return languageSelected.sidebarSingapore;
    }
    return selectedCityName;
  };

  return {
    weather,
    displayedCity: getDisplayedCity(),
  };
}

export default useFullWeatherReport;
