import Language from '../../utils/Language';

import './client_error.scss';

// Interface to define props
interface Props {
  languageSelected: Language
}

// Destructuring props and setting the function
function ClientError({
  languageSelected,
} : Props) {
  // Main return
  return (
    <div className="client-error empty-content">
      <img src="../../assets/client_error.gif" alt="client_error" />
      <h1>{(languageSelected).clientErrorMessage}</h1>
      <span>{(languageSelected).clientErrorTip}</span>
    </div>
  );
}

export default ClientError;
