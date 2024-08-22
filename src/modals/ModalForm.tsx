import Form from '../widgets/form/Form';
import './ModalForm.scss';

interface Props {
  languageSelected: { [key: string]: string },
  hideModal: () => void;
}

function Modal({
  hideModal,
  languageSelected,
}: Props) {
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

export default Modal;
