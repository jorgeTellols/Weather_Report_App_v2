import Language from '../../utils/Language';
import './server_error.scss';
import serverErrorImage from '../../assets/server_error.gif';

interface Props {
  languageSelected: Language
}

function ServerError({
  languageSelected,
} : Props) {
  return (
    <div className="server-error empty-content">
      <img src={serverErrorImage} alt="server_error" />
      <h1>{(languageSelected).serverErrorMessage}</h1>
      <span>{(languageSelected).serverErrorTip}</span>
    </div>
  );
}

export default ServerError;
