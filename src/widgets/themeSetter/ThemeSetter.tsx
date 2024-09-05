import './theme_setter.scss';
import Button from '../../components/button/Button';

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
  // Main return
  return (
    <div className="theme-setter-container">
      {currentTheme === 'dark' ? (
        <Button styleButton="light-button" handleClick={setLightTheme} textContent="☀️" />
      ) : (
        <Button styleButton="dark-button" handleClick={setDarkTheme} textContent="🌙" />
      )}
    </div>
  );
}

export default ThemeSetter;
