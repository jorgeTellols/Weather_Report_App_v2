import { useState } from 'react';
import Language from '../utils/Language';
import En from '../utils/En';
import useThemeSetter from '../widgets/themeSetter/useThemeSetter';

// Custom hook to handle the logic of the App component
function useApp() {
  const [languageSelected, setLanguageSelected] = useState(En);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');

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

  return {
    languageSelected,
    isFormShowing,
    selectedCityName,
    currentTheme,
    handleLanguageChange,
    selectLondon: () => setSelectedCityName('london'),
    selectToronto: () => setSelectedCityName('toronto'),
    selectSingapore: () => setSelectedCityName('singapore'),
    toggleModal: () => setIsFormShowing(!isFormShowing),
    setDarkTheme,
    setLightTheme,
  };
}

export default useApp;
