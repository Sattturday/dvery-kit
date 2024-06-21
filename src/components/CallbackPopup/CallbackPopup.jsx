import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nameRegex, phoneRegex } from '../../utils/regex';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { usePostCallBackMutation } from '../../api/orderApi';
import { closeAllPopups, setMessage } from '../../store/popupsSlice';
import { InputCheckbox } from '../InputCheckbox';
import { Input } from '../Input';
import { Form } from '../Form';
import { Popup } from '../Popup';

import './CallbackPopup.scss';
import { messages } from '../../utils/data';

export const CallbackPopup = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const [postCallBack, { isLoading }] = usePostCallBackMutation();
  const isOpen = useSelector((state) => state.popups.isOpenCallPopup);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (values && typeof values === 'object') {
      postCallBack(values)
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

  return (
    <Popup isOpen={isOpen} name="callback-popup" title="Обратный звонок">
      <Form
        name="callback"
        buttonText="Заказать звонок"
        loadingText="Идет отправка..."
        isLoading={isLoading}
        isValid={isValid && isConfirm}
        onSubmit={handleSubmit}
      >
        <Input
          name="name_surname"
          title="Имя"
          type="text"
          minLength="2"
          maxLength="40"
          placeholder="Имя Фамилия"
          errors={errors}
          values={values}
          handleChange={handleChange}
          pattern={nameRegex.source}
        />
        <Input
          name="telefone"
          title="Телефон"
          type="tel"
          minLength="5"
          maxLength="18"
          placeholder="+7"
          errors={errors}
          values={values}
          handleChange={handleChange}
          pattern={phoneRegex.source}
        />
        <InputCheckbox
          option={{
            slug: 'agree-call',
            name: 'Соглашаюсь с ',
            link: 'политикой обработки персональных данных',
          }}
          isChecked={isConfirm}
          onChange={() => {
            setIsConfirm(!isConfirm);
          }}
        />
      </Form>
    </Popup>
  );
};
