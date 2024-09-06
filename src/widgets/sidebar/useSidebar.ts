import { useState } from 'react';

// Interface to define the props from the parent
interface Props {
  selectLondon: () => void,
  selectToronto: () => void,
  selectSingapore: () => void,
}

// Custom hook to separate logic from UI in the "Sidebar" component
function useSidebar({
  selectLondon,
  selectToronto,
  selectSingapore,
} : Props) {
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

  // Hook return
  return {
    isVisible,
    firstTime,
    toggleVisibility,
    londonSelection: () => handleCitySelection(selectLondon),
    torontoSelection: () => handleCitySelection(selectToronto),
    singaporeSelection: () => handleCitySelection(selectSingapore),
  };
}

export default useSidebar;
