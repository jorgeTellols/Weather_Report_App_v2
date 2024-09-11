import useSidebar from './useSidebar';
import Button from '../../components/button/Button';
import Language from '../../utils/Language';

import './sidebar.scss';

// Interface to define props
interface Props {
  languageSelected: Language,
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
  } = useSidebar({ selectLondon, selectToronto, selectSingapore });

  // Condition that "builds" the className attribute depending on firstTime state
  let sidebarClass = 'sidebar';
  if (!firstTime) {
    sidebarClass += isVisible ? ' visible' : ' not-visible';
  }

  // Main return
  return (
    <div className={sidebarClass}>
      <h1>{languageSelected.sidebarTitle}</h1>
      <Button
        styleButton="city-option"
        handleClick={londonSelection}
        textContent={languageSelected.sidebarLondon}
      />
      <Button
        styleButton="city-option"
        handleClick={torontoSelection}
        textContent={languageSelected.sidebarToronto}
      />
      <Button
        styleButton="city-option"
        handleClick={singaporeSelection}
        textContent={languageSelected.sidebarSingapore}
      />
      <p>
        {languageSelected.sidebarForm}
        <Button
          textContent={languageSelected.sidebarFormLink}
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
  );
}

export default Sidebar;
