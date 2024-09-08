import FullWeatherReport from '../components/fullWeatherReport/FullWeatherReport';
import Language from '../utils/Language';
import Form from '../widgets/form/Form';
import './modal.scss';

// Interface to define props
interface Props {
  languageSelected: Language,
  hideModal: () => void;
  modalType: string
}

// Destructuring and hook initialization
function ModalForm({
  hideModal,
  languageSelected,
  modalType,
}: Props) {
  let modalContent;

  if (modalType === 'form') {
    modalContent = (
      <Form
        hideModal={hideModal}
        languageSelected={languageSelected}
      />
    );
  } else if (modalType === 'report') {
    modalContent = (
      <FullWeatherReport />
      // cityName={cityName}
      // fullReport={todaysWeather}
    );
  }

  // Main return
  return (
    <div className="modal-background">
      <div className="modal">
        {modalContent}
      </div>
    </div>
  );
}

export default ModalForm;
