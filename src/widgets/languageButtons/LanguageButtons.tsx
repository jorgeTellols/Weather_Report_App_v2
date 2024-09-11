import useLanguageButtons from './useLanguageButtons';
import Button from '../../components/button/Button';
import Language from '../../utils/Language';

import './language_buttons.scss';

// Interface to define props
interface Props {
  switchLanguage: (language: Language) => void;
}

// Destructuring and hook initialization
function LanguageButtons({
  switchLanguage,
}: Props) {
  const {
    setEnglish,
    setSpanish,
    languageSelected,
    isHighlighted,
  } = useLanguageButtons({ switchLanguage });

  // Main return
  return (
    <div className="language-buttons-container">
      <Button
        styleButton="language-button"
        highlightedButton={isHighlighted}
        handleClick={setEnglish}
        textContent={languageSelected.englishLanguage}
      />
      <Button
        styleButton="language-button"
        highlightedButton={!isHighlighted}
        handleClick={setSpanish}
        textContent={languageSelected.spanishLanguage}
      />
    </div>
  );
}

export default LanguageButtons;
