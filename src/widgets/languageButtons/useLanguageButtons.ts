import { useState } from 'react';
import Language from '../../utils/Language';
import Es from '../../utils/Es';
import En from '../../utils/En';

// Interface to define the parent function that changes the language
interface Props {
  switchLanguage: (language: Language) => void;
}

// Custom hook to separate the UI and the logic of the button container
function useLanguageButtons({ switchLanguage } : Props) {
  const [languageSelected, setLanguageSelected] = useState(En);

  // Function that changes the language and sends it to the parent through a callback
  const setLanguage = (language: Language) => {
    setLanguageSelected(language);
    switchLanguage(language);
  };

  // Function to apply styles to the highlighted button
  const applyHighlight = () => {
    if (languageSelected === En) {
      return true;
    }
    return false;
  };

  // Functions to avoid in-line functions on the component
  const setEnglish = () => setLanguage(En);
  const setSpanish = () => setLanguage(Es);
  const isHighlighted = applyHighlight();

  // Hook return
  return {
    setEnglish,
    setSpanish,
    languageSelected,
    isHighlighted,
  };
}

export default useLanguageButtons;
