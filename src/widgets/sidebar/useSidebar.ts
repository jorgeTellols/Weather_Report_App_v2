import { useState } from 'react';

// Custom hook to separate logic from UI in the "Sidebar" component
// It contains all the useStates used in "Sidebar" and a few functions
function useSidebar() {
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

  // Main return
  return {
    isVisible,
    firstTime,
    toggleVisibility,
    handleCitySelection,
  };
}

export default useSidebar;
