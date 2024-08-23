import React from 'react';
import Button from '../../components/button/Button';

interface Props {
  languageSelected: { [key: string]: string },
}

function LanguageButtons({
  languageSelected,
} : Props) {
  return (
    <div className="language-buttons-container">
      <Button
        styleButton="language-button"
        highlightedButton={languageSelected === en ? 'highlighted-button' : ''}
        handleClick={() => setLanguageSelected(en)}
        textContent={languageSelected.englishLanguage}
      />
      <Button
        styleButton="language-button"
        highlightedButton={languageSelected === es ? 'highlighted-button' : ''}
        handleClick={() => setLanguageSelected(es)}
        textContent={languageSelected.spanishLanguage}
      />
    </div>
  );
}

export default LanguageButtons;
