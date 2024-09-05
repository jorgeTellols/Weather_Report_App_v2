import { useState } from 'react';
import Language from '../utils/Language';
import En from '../utils/En';
import useThemeSetter from '../widgets/themeSetter/useThemeSetter';

// Custom hook to handle the logic of the App component
function useApp() {
  const [languageSelected, setLanguageSelected] = useState(En);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');

  // Hook to handle the theme change
  const {
    currentTheme,
    setDarkTheme,
    setLightTheme,
  } = useThemeSetter('dark');

  // Function that changes the language
  const handleLanguageChange = (language: Language) => {
    setLanguageSelected(language);
  };

  // Functions to avoid in-line calls in the component
  const selectLondon = () => setSelectedCityName('london');
  const selectToronto = () => setSelectedCityName('toronto');
  const selectSingapore = () => setSelectedCityName('singapore');
  const showModal = () => setIsFormShowing(true);
  const hideModal = () => setIsFormShowing(false);

  return {
    languageSelected,
    isFormShowing,
    selectedCityName,
    currentTheme,
    handleLanguageChange,
    selectLondon,
    selectToronto,
    selectSingapore,
    showModal,
    hideModal,
    setDarkTheme,
    setLightTheme,
  };
}

export default useApp;
