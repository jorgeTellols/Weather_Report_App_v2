import { useState } from 'react';

// Custom hook to separate logic from UI in the "Sidebar" component
// It contains all the useStates used in "Sidebar" and a few functions
function useSidebar(
  selectLondon: () => void,
  selectToronto: () => void,
  selectSingapore: () => void,
) {
  const [isVisible, setIsVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // Function to set States and change the style of the sidebar
  // (to control when is showing/hiding)
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setFirstTime(false);
  };

  // Function that throws "toggleVisibility" and sends the selected option
  // to the father component (this will allow it to display the correct weather content)
  const handleCitySelection = (citySelected: () => void) => {
    citySelected();
    toggleVisibility();
  };

  // Functions to handle the city selection here and avoid using in-line functions on the component
  const londonSelection = () => handleCitySelection(selectLondon);
  const torontoSelection = () => handleCitySelection(selectToronto);
  const singaporeSelection = () => handleCitySelection(selectSingapore);

  // Main return
  return {
    isVisible,
    firstTime,
    toggleVisibility,
    handleCitySelection,
    londonSelection,
    torontoSelection,
    singaporeSelection,
  };
}

export default useSidebar;
