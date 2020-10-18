import { useState } from 'react';
import { validator } from './validate';

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log('Form submitted successfully')
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target
    setInputs(inputs => ({ ...inputs, [name]: value }));
    const isValid = validator(name, value);
    setValid(isValid);
    setError(!isValid ? `Your ${name} is invalid, please check` : ``)
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    valid,
    error
  };
}
export default useSignUpForm;
