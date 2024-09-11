/* eslint-disable react/require-default-props */
import FullWeatherReport from '../components/fullWeatherReport/FullWeatherReport';
import Language from '../utils/Language';
import Form from '../widgets/form/Form';
import Weather from '../models/Weather';

import './modal.scss';

// Interface to define props
interface Props {
  languageSelected: Language
  hideModal: () => void
  modalType: string
  fullReport?: Weather
  selectedCityName: string
}

// Destructuring and hook initialization
function ModalForm({
  hideModal,
  languageSelected,
  modalType,
  selectedCityName,
  fullReport,
}: Props) {
  let modalContent;

  // Condition to choose what type of form show
  if (modalType === 'form') {
    modalContent = (
      <Form
        hideModal={hideModal}
        languageSelected={languageSelected}
      />
    );
  } else if ((modalType === 'report') && fullReport) {
    modalContent = (
      <FullWeatherReport
        hideModal={hideModal}
        fullReport={fullReport}
        languageSelected={languageSelected}
        selectedCityName={selectedCityName}
      />
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
