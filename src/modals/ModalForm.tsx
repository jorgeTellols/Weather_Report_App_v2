import Language from '../utils/Language';
import Form from '../widgets/form/Form';
import './modal_form.scss';

// Interface to define props
interface Props {
  languageSelected: Language,
  hideModal: () => void;
}

// Destructuring and hook initialization
function ModalForm({
  hideModal,
  languageSelected,
}: Props) {
  // Main return
  return (
    <div className="modal-background">
      <div className="modal">
        <Form
          hideModal={hideModal}
          languageSelected={languageSelected}
        />
      </div>
    </div>
  );
}

export default ModalForm;
