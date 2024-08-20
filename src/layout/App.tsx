// import WeatherReport from './widgets/w-weatherReport';
// import Form from './modals/m-form';
import './App.scss';
import { useState } from 'react';
import es from '../utils/es.json';
import en from '../utils/en.json';
import Button from '../components/button/Button';
import EmptyContent from '../views/emptyContent/EmptyContent';
import Sidebar from '../widgets/sidebar/Sidebar';

function App() {
  const [languageSelected, setLanguageSelected] = useState(en);
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState('');

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
    // if((selectedCityName == (en.sidebarLondon)) || (selectedCityName == (es.sidebarLondon)))
    // {
    //   return "london"
    // }
    // else if((selectedCityName ==
    //  (en.sidebarToronto)) || (selectedCityName == (es.sidebarToronto)))
    // {
    //   return "toronto"
    // }
    // else if((selectedCityName ==
    //  (en.sidebarSingapore)) || (selectedCityName == (es.sidebarSingapore)))
    // {
    //   return "singapore"
    // }
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
      <div className="language-buttons-container">
        <Button
          styleButton="language-button"
          highlightedButton={languageSelected === en}
          handleClick={() => setLanguageSelected(en)}
          textContent={languageSelected.englishLanguage}
        />
        <Button
          styleButton="language-button"
          highlightedButton={languageSelected === es}
          handleClick={() => setLanguageSelected(es)}
          textContent={languageSelected.spanishLanguage}
        />
      </div>
      <div className={`${setContentBackground()} content`}>
        {selectedCityName === '' ? (
          <EmptyContent
            emptyContentTitle={languageSelected.emptyContentTitle}
            emptyContentSpan={languageSelected.emptyContentSpan}
          />
        ) : (
          // <WeatherReport
          //   selectedCityName={selectedCityName}
          //   languageSelected={languageSelected}>
          // </WeatherReport>
          <h1>prueba</h1>
        )}
      </div>
      {isFormShowing ? (
        // <Form
        //   languageSelected={languageSelected}
        //   hideModal={() => setIsFormShowing(false)}>
        // </Form>
        <h1>No sale el form</h1>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
