import { useState, useEffect } from 'react';

// Custom hook to separate logic from UI in the "Form" component
function useForm() {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [nameField, setNameField] = useState('');
  const [birthdateField, setBirthdateField] = useState('');
  const [cityField, setCityField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [phoneNumberField, setPhoneNumberField] = useState('');

  // UseEffect to checks changes done to the fields and enables/disables the button
  useEffect(() => {
    if (!(nameField === '') && !(birthdateField === '') && !(cityField === '') && !(emailField === '') && !(phoneNumberField === '')) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [nameField, birthdateField, cityField, emailField, phoneNumberField]);

  // Functions that sets the new states

  const handleNameChange = (name: string) => setNameField(name.trim());
  const handleBirthChange = (birthdate: string) => setBirthdateField(birthdate.trim());
  const handleCityChange = (city: string) => setCityField(city.trim());
  const handleEmailChange = (email: string) => setEmailField(email.trim());
  const handlePhoneChange = (phoneNumber: string) => setPhoneNumberField(phoneNumber.trim());
  const disableButton = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

  // Hook return
  return {
    buttonStatus,
    setName: (e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value),
    setBirthdate: (e: React.ChangeEvent<HTMLInputElement>) => handleBirthChange(e.target.value),
    setCity: (e: React.ChangeEvent<HTMLInputElement>) => handleCityChange(e.target.value),
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value),
    setPhone: (e: React.ChangeEvent<HTMLInputElement>) => handlePhoneChange(e.target.value),
    disableButton,
  };
}

export default useForm;
