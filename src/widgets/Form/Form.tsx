import './Form.scss';
import useForm from './useForm';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Language from '../../utils/Language';

// Interface to define props
interface Props {
  languageSelected: Language,
  hideModal: () => void;
}

// Destructuring and hook initialization
function Form({
  hideModal,
  languageSelected,
}: Props) {
  const {
    setName,
    setBirthdate,
    setCity,
    setEmail,
    setPhone,
    disableButton,
    buttonEnabledStyle,
  } = useForm();

  // Main return
  return (
    <>
      <h1>{(languageSelected).formTitle}</h1>
      <form>
        <div className="first-row">
          <Input handleChange={setName} labelContent={languageSelected.formName} inputType="text" />
          <Input handleChange={setBirthdate} labelContent={languageSelected.formBirthdate} inputType="text" />
          <Input handleChange={setCity} labelContent={languageSelected.formCity} inputType="text" />
        </div>
        <div className="second-row">
          <Input handleChange={setEmail} labelContent={languageSelected.formEmail} inputType="text" />
          <Input handleChange={setPhone} labelContent={languageSelected.formPhoneNumber} inputType="text" />
          <div className="form-buttons-container">
            <Button handleClick={hideModal} styleButton="close-form-button" textContent={languageSelected.formCloseButton} />
            <Button handleClick={disableButton} highlightedButton={buttonEnabledStyle} styleButton="submit-form-button" textContent={languageSelected.formSubmitButton} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
