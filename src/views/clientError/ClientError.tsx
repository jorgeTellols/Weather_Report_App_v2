import Language from '../../utils/Language';
import './client_error.scss';
import clientErrorImage from '../../assets/client_error.gif';

interface Props {
  languageSelected: Language
}

function ClientError({
  languageSelected,
} : Props) {
  return (
    <div className="client-error empty-content">
      <img src={clientErrorImage} alt="client_error" />
      <h1>{(languageSelected).clientErrorMessage}</h1>
      <span>{(languageSelected).clientErrorTip}</span>
    </div>
  );
}

export default ClientError;
