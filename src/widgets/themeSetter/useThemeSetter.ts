import { useState } from 'react';

function useThemeSetter(theme: string) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  // Function that sets the new theme
  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };

  // Functions to avoid using inline functions
  const setDarkTheme = () => handleThemeChange('dark');
  const setLightTheme = () => handleThemeChange('light');

  // Hook return
  return {
    currentTheme,
    setDarkTheme,
    setLightTheme,
  };
}

export default useThemeSetter;
