import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeAllPopups, setMessage } from '../../../../store/popupsSlice';
import { usePostMeasureMutation } from '../../../../api/orderApi';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { addressRegex, nameRegex, phoneRegex } from '../../../../utils/regex';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { InputCheckbox } from '../../../../components/InputCheckbox';
import { messages } from '../../../../utils/data';
import img1 from '../../../../images/measure-min.jpg';

import './Measure.scss';

export const Measure = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const [postMeasure, { isLoading }] = usePostMeasureMutation();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (values && typeof values === 'object') {
      postMeasure(values)
        .then((data) => {
          if (data && data.error) {
            throw new Error(data.error);
          }

          resetForm();
          setIsConfirm(false);
          dispatch(closeAllPopups());
          dispatch(setMessage(messages.successMessage));
        })
        .catch(() => {
          dispatch(closeAllPopups());
          dispatch(setMessage(messages.errorMessage));
        });
    }
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className='measure' id={'measure'}>
      <div className='wrapper'>
        <h2 className='measure__title'>Записаться на&nbsp;замер </h2>
        <div className='measure__container'>
          <Form
            name='measure'
            buttonText='Записаться'
            loadingText='Идет отправка...'
            isLoading={isLoading}
            isValid={isValid && isConfirm}
            onSubmit={handleSubmit}
          >
            <Input
              name='name_surname'
              title='Имя'
              type='text'
              minLength='2'
              maxLength='40'
              placeholder='Имя Фамилия'
              errors={errors}
              values={values}
              handleChange={handleChange}
              pattern={nameRegex.source}
            />
            <Input
              name='telefone'
              title='Телефон'
              type='tel'
              minLength='5'
              maxLength='18'
              placeholder='+7'
              errors={errors}
              values={values}
              handleChange={handleChange}
              pattern={phoneRegex.source}
            />
            <Input
              name='address'
              title='Адрес'
              type='text'
              minLength='10'
              maxLength='200'
              placeholder='Город, улица, дом'
              errors={errors}
              values={values}
              handleChange={handleChange}
              pattern={addressRegex.source}
            />
            <Input
              name='content'
              title='Что будем измерять?'
              type='text'
              minLength='4'
              maxLength='200'
              placeholder='Входная дверь, окна и т.д.'
              errors={errors}
              values={values}
              handleChange={handleChange}
              pattern={addressRegex.source}
            />
            <InputCheckbox
              option={{
                slug: 'agree',
                name: 'Соглашаюсь с ',
                link: 'политикой обработки персональных данных',
              }}
              isChecked={isConfirm}
              onChange={() => {
                setIsConfirm(!isConfirm);
              }}
            />
          </Form>
          <img
            src={img1}
            alt='Фото замерщика за работой'
            className='measure__img'
          />
        </div>
      </div>
    </section>
  );
};
