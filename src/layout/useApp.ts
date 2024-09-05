import { useState } from 'react';
import Language from '../utils/Language';
import En from '../utils/En';

// Custom hook to handle the logic of the App component
function useApp() {
  const [languageSelected, setLanguageSelected] = useState(En);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');

  // Function to handle language change
  const handleLanguageChange = (language: Language) => {
    setLanguageSelected(language);
  };

  // Handlers for city selection and modal display
  const selectLondon = () => setSelectedCityName('london');
  const selectToronto = () => setSelectedCityName('toronto');
  const selectSingapore = () => setSelectedCityName('singapore');
  const showModal = () => setIsFormShowing(true);
  const hideModal = () => setIsFormShowing(false);

  return {
    languageSelected,
    isFormShowing,
    selectedCityName,
    handleLanguageChange,
    selectLondon,
    selectToronto,
    selectSingapore,
    showModal,
    hideModal,
  };
}

export default useApp;
