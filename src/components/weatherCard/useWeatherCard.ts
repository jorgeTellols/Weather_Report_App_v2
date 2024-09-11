import Language from '../../utils/Language';

// Custom hook to handle the logic of the WeatherCard component
function useWeatherCard(
  languageSelected: Language,
  selectedCityName: string,
) {
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

  // Hook return
  return {
    displayedCity: getDisplayedCity(),
  };
}

export default useWeatherCard;
