import { useState } from 'react';

// Custom hook to separate logic from UI in the "Sidebar" component
function useSidebar(
  selectLondon: () => void,
  selectToronto: () => void,
  selectSingapore: () => void,
) {
  const [isVisible, setIsVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // Function to to control when the sidebar is showing/hiding
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (firstTime) {
      setFirstTime(false);
    }
  };

  // Function that sends the selected option to the parent component
  const handleCitySelection = (citySelected: () => void) => {
    citySelected();
    toggleVisibility();
  };

  // Functions to avoid using in-line functions on the component
  const londonSelection = () => handleCitySelection(selectLondon);
  const torontoSelection = () => handleCitySelection(selectToronto);
  const singaporeSelection = () => handleCitySelection(selectSingapore);

  // Hook return
  return {
    isVisible,
    firstTime,
    toggleVisibility,
    londonSelection,
    torontoSelection,
    singaporeSelection,
  };
}

export default useSidebar;
