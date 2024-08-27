import './App.scss';
import { useState } from 'react';
import Language from '../utils/Language';
import En from '../utils/En';
import Es from '../utils/Es';
import LanguageButtons from '../widgets/languageButtons/LanguageButtons';
import EmptyContent from '../views/emptyContent/EmptyContent';
import Sidebar from '../widgets/sidebar/Sidebar';
import ModalForm from '../modals/ModalForm';
import WeatherReport from '../widgets/weatherReport/WeatherReport';

function App() {
  const [languageSelected, setLanguageSelected] = useState(En);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');

  const handleLanguageChange = (language: Language) => {
    setLanguageSelected(language);
  };

  // useEffect(() => {
  //   if((selectedCityName == (en.sidebarLondon)) || (selectedCityName == (es.sidebarLondon)))
  //   {
  //     setSelectedCityName(languageSelected.sidebarLondon)
  //   }
  //   else if(selectedCityName == en.sidebarToronto)
  //     {
  //     setSelectedCityName(languageSelected.sidebarToronto)
  //   }
  //   else if((selectedCityName ==
  // (en.sidebarSingapore)) || (selectedCityName == (es.sidebarSingapore)))
  //     {
  //     setSelectedCityName(languageSelected.sidebarSingapore)
  //   }
  // }, [languageSelected])

  function setContentBackground() {
    if ((selectedCityName === (En.sidebarLondon)) || (selectedCityName === (Es.sidebarLondon))) {
      return 'london';
    }
    if ((selectedCityName
     === (En.sidebarToronto)) || (selectedCityName === (Es.sidebarToronto))) {
      return 'toronto';
    }
    if ((selectedCityName
     === (En.sidebarSingapore)) || (selectedCityName === (Es.sidebarSingapore))) {
      return 'singapore';
    }

    return '';
  }

  return (
    <div className="weather-app">
      <Sidebar
        selectLondon={() => setSelectedCityName(languageSelected.sidebarLondon)}
        selectToronto={() => setSelectedCityName(languageSelected.sidebarToronto)}
        selectSingapore={() => setSelectedCityName(languageSelected.sidebarSingapore)}
        showModal={() => setIsFormShowing(true)}
        languageSelected={languageSelected}
      />
      <LanguageButtons
        switchLanguage={handleLanguageChange}
      />
      <div className={`${setContentBackground()} content`}>
        {selectedCityName === '' ? (
          <EmptyContent
            emptyContentTitle={languageSelected.emptyContentTitle}
            emptyContentSpan={languageSelected.emptyContentSpan}
          />
        ) : (
          <WeatherReport
            // selectedCityName={selectedCityName}
            languageSelected={languageSelected}
          />
        )}
      </div>
      {isFormShowing ? (
        <ModalForm
          languageSelected={languageSelected}
          hideModal={() => setIsFormShowing(false)}
        />
      ) : ('')}
    </div>
  );
}

export default App;
