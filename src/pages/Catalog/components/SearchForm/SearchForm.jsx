import { useEffect } from 'react';

import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';

export const SearchForm = ({ searchHandler }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('search', values.search);
    searchHandler(values.search);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Form
      name='search'
      buttonText='Найти'
      loadingText='Ищем...'
      isLoading={false}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <Input
        name='search'
        type='text'
        minLength='2'
        maxLength='40'
        placeholder='Входная дверь белая'
        errors={errors}
        values={values}
        handleChange={handleChange}
      />
    </Form>
  );
};
