import Button from '../../components/button/Button';

import './theme_setter.scss';

// Interface to define props
interface Props {
  currentTheme: string;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

// Hook initialization and return
function ThemeSetter({
  currentTheme,
  setDarkTheme,
  setLightTheme,
}: Props) {
  // Condition to choose which theme button show
  const themeButton = currentTheme === 'dark'
    ? <Button styleButton="light-button" handleClick={setLightTheme} textContent="🌞" />
    : <Button styleButton="dark-button" handleClick={setDarkTheme} textContent="🌙" />;

  // Main return
  return (
    <div className="theme-setter-container">
      {themeButton}
    </div>
  );
}

export default ThemeSetter;
