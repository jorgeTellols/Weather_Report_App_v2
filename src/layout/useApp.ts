import { useState } from 'react';
import Language from '../utils/Language';
import En from '../utils/En';
import useThemeSetter from '../widgets/themeSetter/useThemeSetter';
import Weather from '../widgets/weatherWidget/Weather/Weather';
// import Weather from '../widgets/weatherWidget/Weather/Weather';

// Custom hook to handle the logic of the App component
function useApp() {
  const [languageSelected, setLanguageSelected] = useState(En);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');
  const [modalType, setModalType] = useState('');
  const [fullReport, setFullReport] = useState<Weather>();

  // Call to the hook to handle the theme change
  const {
    currentTheme,
    setDarkTheme,
    setLightTheme,
  } = useThemeSetter('dark');

  // Function that changes the language
  const handleLanguageChange = (language: Language) => {
    setLanguageSelected(language);
  };

  // Function that defines the modal to "Form" and shows/hides it
  const toggleFormModal = () => {
    setModalType('form');
    setIsFormShowing(!isFormShowing);
  };

  // Function that defines the modal to "Report" and shows/hides it
  const toggleReportModal = (weatherReport: Weather | null) => {
    if (weatherReport) {
      setModalType('report');
      setFullReport(weatherReport);
      setIsFormShowing(true);
    }
  };

  // Function that just closes the modal
  const hideModal = () => {
    setIsFormShowing(false);
  };

  return {
    languageSelected,
    isFormShowing,
    selectedCityName,
    currentTheme,
    modalType,
    fullReport,
    handleLanguageChange,
    selectLondon: () => setSelectedCityName('london'),
    selectToronto: () => setSelectedCityName('toronto'),
    selectSingapore: () => setSelectedCityName('singapore'),
    toggleFormModal,
    toggleReportModal,
    hideModal,
    setDarkTheme,
    setLightTheme,
    setFullReport,
  };
}

export default useApp;
