/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

interface Props {
  languageSelected: { [key: string]: string },
}

function Form({
  languageSelected,
}: Props) {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [nameField] = useState('');
  const [birthdateField] = useState('');
  const [cityField] = useState('');
  // const [nameField, setNameField] = useState('');
  // const [birthdateField, setBirthdateField] = useState('');
  // const [cityField, setCityField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [phoneNumberField, setPhoneNumberField] = useState('');

  // Validates the fields and enables/disables the button
  useEffect(() => {
    if (!(nameField === '') && !(birthdateField === '') && !(cityField === '') && !(emailField === '') && !(phoneNumberField === '')) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [nameField, birthdateField, cityField, emailField, phoneNumberField]);

  return (
    <>
      <h1>{(languageSelected).formTitle}</h1>
      <form>
        <div className="first-row">
          {/* <Input handleChange={(e: Event) => setNameField((e.target.value).trim())} labelContent={languageSelected.formName} inputType="text" />
          <Input handleChange={(e: Event) => setBirthdateField((e.target.value).trim())} labelContent={languageSelected.formBirthdate} inputType="text" />
          <Input handleChange={(e: Event) => setCityField((e.target.value).trim())} labelContent={languageSelected.formCity} inputType="text" /> */}
        </div>
        <div className="second-row">
          <Input handleChange={(e) => setEmailField((e.target.value).trim())} labelContent={languageSelected.formEmail} inputType="text" />
          <Input handleChange={(e) => setPhoneNumberField((e.target.value).trim())} labelContent={languageSelected.formPhoneNumber} inputType="text" />
          <Button handleClick={(e) => e.preventDefault()} highlightedButton={buttonStatus} styleButton="form-button" textContent={languageSelected.formSubmitButton} />
        </div>
      </form>
    </>
  );
}

export default Form;
