import './sidebar.scss';
import { useState } from 'react';
import Button from '../../components/button/Button';

// Interface to define props
interface Props {
  languageSelected: { [key: string]: string },
  showModal: () => void,
  selectLondon: () => void;
  selectToronto: () => void;
  selectSingapore: () => void;
}

// Destructuring and hook initialization
function Sidebar({
  languageSelected,
  selectLondon,
  selectToronto,
  selectSingapore,
  showModal,
} : Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // // Use hooks to change the properties and apply the correct styles
  // function toggleVisibility() {
  //   setIsVisible(!isVisible);
  //   setFirstTime(false);
  // }

  // Function that changes the state of "isVisible" and sends the selected option
  // to the father component, this will allow it to display the correct weather content
  function handleCitySelection(citySelected: () => void) {
    citySelected();
    setIsVisible(!isVisible);
  }

  return (
    <div>
      {firstTime
        ? (
          <div className="sidebar">
            <div className="sidebar-toggle">
              <Button
                styleButton="sidebar-toggle-button"
                handleClick={() => {
                  setIsVisible(!isVisible);
                  setFirstTime(false);
                }}
                textContent="🌏"
              />
            </div>
          </div>
        )
        : (
          <div className={`${isVisible ? 'visible' : 'not-visible'} sidebar`}>
            <h1>{(languageSelected).sidebarTitle}</h1>
            <Button
              styleButton="city-option"
              handleClick={() => handleCitySelection(selectLondon)}
              textContent={(languageSelected).sidebarLondon}
            />
            <Button
              styleButton="city-option"
              handleClick={() => handleCitySelection(selectToronto)}
              textContent={(languageSelected).sidebarToronto}
            />
            <Button
              styleButton="city-option"
              handleClick={() => handleCitySelection(selectSingapore)}
              textContent={(languageSelected).sidebarSingapore}
            />
            <p>
              {(languageSelected).sidebarForm}
              <Button
                textContent={`${(languageSelected).sidebarFormLink}`}
                handleClick={showModal}
                styleButton="form-button"
              />
            </p>
            <div className="sidebar-toggle">
              <Button
                styleButton={`sidebar-toggle-button ${isVisible ? 'hide' : ''}`}
                handleClick={() => {
                  setIsVisible(!isVisible);
                }}
                textContent="🌏"
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default Sidebar;
