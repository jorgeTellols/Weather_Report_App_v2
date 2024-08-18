import './sidebar.scss';
import { useState } from 'react';
import Button from '../../components/button/Button';

interface Props {
  languageSelected: { [key: string]: string },
  //   showModal: (event: React.MouseEvent<HTMLButtonElement>) => void,
//   handleClickLondon: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   handleClickToronto: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   handleClickSingapore: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Sidebar({
  languageSelected,
//   handleClickLondon,
//   handleClickToronto,
//   handleClickSingapore,
//   showModal,
} : Props) {
  // Hook initialization
  const [isVisible, setIsVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // Allows me to change the state of "isVisible" and use the prop given by the father component
  //   const handleClick = (prop) => {
  //     prop();
  //     setIsVisible(false);
  //   };

  return (
    <div>
      {firstTime
        ? (
          <div className="sidebar first-time">
            <div className="toggle-sidebar">
              <Button
                styleButton="toggle-sidebar"
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
                //   handleClick={() => handleClick(handleClickLondon)}
              handleClick={() => console.log('London')}
              textContent={(languageSelected).sidebarLondon}
            />
            <Button
                //   handleClick={() => handleClick(handleClickToronto)}
              handleClick={() => console.log('Toronto')}
              textContent={(languageSelected).sidebarToronto}
            />
            <Button
                //   handleClick={() => handleClick(handleClickSingapore)}
              handleClick={() => console.log('Singapur')}
              textContent={(languageSelected).sidebarSingapore}
            />
            <p>
              {(languageSelected).sidebarForm}
              {/* <a onClick={showModal}>{(languageSelected).sidebarFormLink}</a> */}
              <a href="https://www.google.com">{(languageSelected).sidebarFormLink}</a>
            </p>
            {/* <div className="toggle-sidebar" onClick={() => setIsVisible(!isVisible)}> */}
            <div className="toggle-sidebar">
              {isVisible
                ? (
                  <h1 className="hide">🌏</h1>
                )
                : (
                  <h1 className="show">🌏</h1>
                )}
            </div>
          </div>
        )}
    </div>
  );
}

export default Sidebar;
