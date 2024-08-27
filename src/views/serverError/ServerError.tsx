import Language from '../../utils/Language';
import './server_error.scss';
// import serverErrorImage from '../../assets/server_error.gif';

// Interface to define props
interface Props {
  languageSelected: Language
}

// Destructuring props and setting the function
function ServerError({
  languageSelected,
} : Props) {
  // Main return
  return (
    <div className="server-error empty-content">
      <img src="../../assets/server_error.gif" alt="server_error" />
      <h1>{(languageSelected).serverErrorMessage}</h1>
      <span>{(languageSelected).serverErrorTip}</span>
    </div>
  );
}

export default ServerError;
