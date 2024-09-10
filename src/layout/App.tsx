import './App.scss';
import useApp from './useApp';
import LanguageButtons from '../widgets/languageButtons/LanguageButtons';
import EmptyContent from '../views/emptyContent/EmptyContent';
import Sidebar from '../widgets/sidebar/Sidebar';
import Modal from '../modals/Modal';
import WeatherWidget from '../widgets/weatherWidget/WeatherWidget';
import ThemeSetter from '../widgets/themeSetter/ThemeSetter';

function App() {
  const {
    languageSelected,
    isFormShowing,
    selectedCityName,
    currentTheme,
    modalType,
    fullReport,
    hideModal,
    toggleFormModal,
    toggleReportModal,
    handleLanguageChange,
    selectLondon,
    selectToronto,
    selectSingapore,
    setDarkTheme,
    setLightTheme,
  } = useApp();

  return (
    <div className={`${currentTheme} weather-app`}>
      <Sidebar
        selectLondon={selectLondon}
        selectToronto={selectToronto}
        selectSingapore={selectSingapore}
        showModal={toggleFormModal}
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
            showModal={toggleReportModal}
          />
        )}
      </div>
      <ThemeSetter
        currentTheme={currentTheme}
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
      {isFormShowing ? (
        <Modal
          languageSelected={languageSelected}
          hideModal={hideModal}
          modalType={modalType}
          fullReport={fullReport}
          selectedCityName={selectedCityName}
        />
      ) : ''}
    </div>
  );
}

export default App;
