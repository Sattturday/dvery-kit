import { useEffect, useState } from 'react';

import { addressRegex, nameRegex, phoneRegex } from '../../../../utils/regex';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import img1 from '../../../../images/measure-min.jpg';

import './Measure.scss';
import { InputCheckbox } from '../../../../components/InputCheckbox/InputCheckbox';

export const Measure = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation('measure');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    // handleRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  return (
    <section className='measure'>
      <div className='wrapper'>
        <h2 className='measure__title'>Записаться на замер </h2>
        <div className='measure__container'>
          <Form
            name='measure'
            buttonText='Записаться'
            loadingText='Идет отправка...'
            isLoading={false}
            isValid={isValid && isConfirm}
            onSubmit={handleSubmit}
          >
            <Input
              name='name'
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
              name='phone'
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
              name='category'
              title='Что будем измерять?'
              type='text'
              minLength='4'
              maxLength='200'
              placeholder='Входная дверь, межкомнатная, окна и т.д.'
              errors={errors}
              values={values}
              handleChange={handleChange}
              pattern={addressRegex.source}
            />
            <InputCheckbox
              option={{
                slug: 'agree',
                name: 'Соглашаюсь с политикой обработки персональных данных',
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
