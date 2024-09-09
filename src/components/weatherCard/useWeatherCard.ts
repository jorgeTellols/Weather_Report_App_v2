import { useState } from 'react';
import Language from '../../utils/Language';

// Custom hook to handle the logic of the WeatherCard component
function useWeatherCard(
  languageSelected: Language,
  selectedCityName: string,
) {
  const [isWeatherReportShowing, setIsWeatherReportShowing] = useState(false);

  // Function thats shows the modal with the full weather report

  const showWeatherReportModal = () => {
    setIsWeatherReportShowing(!isWeatherReportShowing);
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

  // Function

  // Hook return
  return {
    displayedCity: getDisplayedCity(),
    isWeatherReportShowing,
    toggleModal: () => showWeatherReportModal(),
  };
}

export default useWeatherCard;
