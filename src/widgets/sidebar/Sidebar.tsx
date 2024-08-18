import './sidebar.scss';
import { useState } from 'react';
import Button from '../../components/button/Button';

interface Props {
  languageSelected: { [key: string]: string },
  //   showModal: (event: React.MouseEvent<HTMLButtonElement>) => void,
  // handleClickLondon: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // handleClickToronto: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // handleClickSingapore: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Sidebar({
  languageSelected,
  // handleClickLondon,
  // handleClickToronto,
  // handleClickSingapore,
//   showModal,
} : Props) {
  // Hook initialization
  const [isVisible, setIsVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // Allows me to change the state of "isVisible" and use the prop given by the father component
  function handleClick() {
    // prop();
    setIsVisible(!isVisible);
  }

  return (
    <div>
      {firstTime
        ? (
          <div className="sidebar first-time">
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
              // handleClick={() => handleClick(handleClickLondon)}
              handleClick={() => handleClick()}
              textContent={(languageSelected).sidebarLondon}
            />
            <Button
              styleButton="city-option"
              // handleClick={() => handleClick(handleClickToronto)}
              handleClick={() => handleClick()}
              textContent={(languageSelected).sidebarToronto}
            />
            <Button
              styleButton="city-option"
              // handleClick={() => handleClick(handleClickSingapore)}
              handleClick={() => handleClick()}
              textContent={(languageSelected).sidebarSingapore}
            />
            <p>
              {(languageSelected).sidebarForm}
              {/* <a onClick={showModal}>{(languageSelected).sidebarFormLink}</a> */}
              <a href="https://www.google.com">{(languageSelected).sidebarFormLink}</a>
            </p>
            {/* <div className="toggle-sidebar" onClick={() => setIsVisible(!isVisible)}> */}
            <div className="sidebar-toggle">
              {isVisible
                ? (
                  <Button
                    styleButton="sidebar-toggle-button hide"
                    handleClick={() => {
                      setIsVisible(!isVisible);
                    }}
                    textContent="🌏"
                  />
                )
                : (
                  <Button
                    styleButton="sidebar-toggle-button"
                    handleClick={() => {
                      setIsVisible(!isVisible);
                    }}
                    textContent="🌏"
                  />

                )}
            </div>
          </div>
        )}
    </div>
  );
}

export default Sidebar;
