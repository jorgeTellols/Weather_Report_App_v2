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
        <Button handleClick={setLightTheme} textContent="Switch to Light" />
      ) : (
        <Button handleClick={setDarkTheme} textContent="Switch to Dark" />
      )}
    </div>
  );
}

export default ThemeSetter;
