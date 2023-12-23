import './CallButton.scss';

export const CallButton = ({ type }) => {
  const callHandler = () => console.log('Call me!');

  return (
    <button
      className={`call-button call-button_type_${type}`}
      type='button'
      onClick={callHandler}
    >
      <span>Обратный звонок</span>
    </button>
  );
};
