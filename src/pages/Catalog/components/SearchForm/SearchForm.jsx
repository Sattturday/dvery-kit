import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { setRequestFilter } from '../../../../store/filterSlice';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import Clean from '../../../../images/icons/close.svg';

import './SearchForm.scss';

export const SearchForm = ({ searchHandler }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    searchHandler(values.search);
  }

  const handleCleanSearch = () => {
    dispatch(setRequestFilter(''));
    resetForm();
  };

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
        maxLength='40'
        placeholder='Входная дверь белая'
        errors={errors}
        values={values}
        handleChange={handleChange}
      />
      {isValid ? (
        <button
          className='search-clean'
          type='button'
          onClick={handleCleanSearch}
        >
          <img
            className='search-clean__img'
            src={Clean}
            alt='Кнопка очистки поля поисковой строки'
          />
        </button>
      ) : (
        <span className='search-icon'></span>
      )}
    </Form>
  );
};
