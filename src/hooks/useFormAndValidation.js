import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValidPattern = e.target.closest('input').validity.patternMismatch;

    if (isValidPattern && name === 'name') {
      e.target.setCustomValidity(
        'Имя может содержать только латиницу, кириллицу, пробел или дефис'
      );
    } else if (isValidPattern && name === 'phone') {
      e.target.setCustomValidity(
        'Пожалуйста, введите корректный номер телефона'
      );
    } else {
      e.target.setCustomValidity('');
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newIsValid = false, newValues = {}, newErrors = {}) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
