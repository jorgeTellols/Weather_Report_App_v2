import { useState, useEffect } from 'react';

// Custom hook to separate logic from UI in the "Form" component
// It contains all the useStates and useEffect used in "Form" and a few functions
function useForm() {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [nameField, setNameField] = useState('');
  const [birthdateField, setBirthdateField] = useState('');
  const [cityField, setCityField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [phoneNumberField, setPhoneNumberField] = useState('');

  // UseEffect that checks if any change is done tp the fields and enables/disables the button
  useEffect(() => {
    if (!(nameField === '') && !(birthdateField === '') && !(cityField === '') && !(emailField === '') && !(phoneNumberField === '')) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [nameField, birthdateField, cityField, emailField, phoneNumberField]);

  // Sets the name recived from the user into nameField
  const handleNameChange = (name: string) => setNameField(name.trim());

  // Function that infers the parent event calls "handleNameChange" to set the new state
  const setName = (e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value);

  // The same thing with Birthdate
  const handleBirthChange = (birthdate: string) => setBirthdateField(birthdate.trim());

  const setBirthdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleBirthChange(e.target.value);
  };

  // The same thing with City
  const handleCityChange = (city: string) => setCityField(city.trim());

  const setCity = (e: React.ChangeEvent<HTMLInputElement>) => handleCityChange(e.target.value);

  // The same thing with Email
  const handleEmailChange = (email: string) => setEmailField(email.trim());

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value);

  // The same thing with PhoneNumber
  const handlePhoneChange = (phoneNumber: string) => setPhoneNumberField(phoneNumber.trim());

  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) => handlePhoneChange(e.target.value);

  // The same thing with the submit button

  const disableButton = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

  // Main return
  return {
    buttonStatus,
    setName,
    setBirthdate,
    setCity,
    setEmail,
    setPhone,
    disableButton,
  };
}

export default useForm;
