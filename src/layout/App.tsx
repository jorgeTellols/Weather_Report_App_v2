import './App.scss';
import useApp from './useApp';
import LanguageButtons from '../widgets/languageButtons/LanguageButtons';
import EmptyContent from '../views/emptyContent/EmptyContent';
import Sidebar from '../widgets/sidebar/Sidebar';
import ModalForm from '../modals/ModalForm';
import WeatherWidget from '../widgets/weatherReport/WeatherWidget';
import ThemeSetter from '../widgets/themeSetter/ThemeSetter';

function App() {
  const {
    languageSelected,
    isFormShowing,
    selectedCityName,
    currentTheme,
    handleLanguageChange,
    selectLondon,
    selectToronto,
    selectSingapore,
    showModal,
    hideModal,
    setDarkTheme,
    setLightTheme,
  } = useApp();

  return (
    <div className={`${currentTheme} weather-app`}>
      <Sidebar
        selectLondon={selectLondon}
        selectToronto={selectToronto}
        selectSingapore={selectSingapore}
        showModal={showModal}
        languageSelected={languageSelected}
      />
      <LanguageButtons switchLanguage={handleLanguageChange} />
      <div className={`${selectedCityName} content`}>
        {selectedCityName === '' ? (
          <EmptyContent
            emptyContentTitle={languageSelected.emptyContentTitle}
            emptyContentSpan={languageSelected.emptyContentSpan}
          />
        ) : (
          <WeatherWidget
            selectedCityName={selectedCityName}
            languageSelected={languageSelected}
          />
        )}
      </div>
      <ThemeSetter
        currentTheme={currentTheme}
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
      {isFormShowing && (
        <ModalForm
          languageSelected={languageSelected}
          hideModal={hideModal}
        />
      )}
    </div>
  );
}

export default App;
