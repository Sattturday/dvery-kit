import './CallButton.scss';

export const CallButton = () => {
  const callHandler = () => console.log('Call me!');

  return (
    <button className='call-button' type='button' onClick={callHandler}>
      Обратный звонок
    </button>
  );
};
