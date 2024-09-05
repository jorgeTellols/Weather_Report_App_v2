import './App.scss';
import useApp from './useApp';
import LanguageButtons from '../widgets/languageButtons/LanguageButtons';
import EmptyContent from '../views/emptyContent/EmptyContent';
import Sidebar from '../widgets/sidebar/Sidebar';
import ModalForm from '../modals/ModalForm';
import WeatherWidget from '../widgets/weatherReport/WeatherWidget';

function App() {
  const {
    languageSelected,
    isFormShowing,
    selectedCityName,
    handleLanguageChange,
    selectLondon,
    selectToronto,
    selectSingapore,
    showModal,
    hideModal,
  } = useApp();

  return (
    <div className="weather-app">
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
