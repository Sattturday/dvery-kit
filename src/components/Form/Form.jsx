import './Form.scss';

export const Form = ({
  name,
  buttonText,
  loadingText,
  onSubmit,
  isLoading,
  isValid,
  children,
}) => {
  return (
    <form
      className={`form form_type_${name}`}
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
      <button
        className={`form__submit form__submit_type_${name}${
          (!isValid && ' form__submit_disabled') || ''
        }`}
        type='submit'
        disabled={!isValid}
      >
        <span>{isLoading ? loadingText : buttonText}</span>
      </button>
    </form>
  );
};
