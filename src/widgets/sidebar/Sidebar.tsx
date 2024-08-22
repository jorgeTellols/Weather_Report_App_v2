import './sidebar.scss';
import useSidebar from './useSidebar';
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
  const {
    isVisible,
    firstTime,
    toggleVisibility,
    londonSelection,
    torontoSelection,
    singaporeSelection,
  } = useSidebar(selectLondon, selectToronto, selectSingapore);

  // Main return
  return (
    <div>
      {firstTime
        ? (
          <div className="sidebar">
            <div className="sidebar-toggle">
              <Button
                styleButton="sidebar-toggle-button"
                handleClick={toggleVisibility}
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
              handleClick={londonSelection}
              textContent={(languageSelected).sidebarLondon}
            />
            <Button
              styleButton="city-option"
              handleClick={torontoSelection}
              textContent={(languageSelected).sidebarToronto}
            />
            <Button
              styleButton="city-option"
              handleClick={singaporeSelection}
              textContent={(languageSelected).sidebarSingapore}
            />
            <p>
              {(languageSelected).sidebarForm}
              <Button
                textContent={`${(languageSelected).sidebarFormLink}`}
                handleClick={showModal}
                styleButton="display-form-button"
              />
            </p>
            <div className="sidebar-toggle">
              <Button
                styleButton={`sidebar-toggle-button ${isVisible ? 'hide' : ''}`}
                handleClick={toggleVisibility}
                textContent="🌏"
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default Sidebar;
