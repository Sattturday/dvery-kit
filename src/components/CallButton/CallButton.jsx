import { useDispatch } from 'react-redux';

import { openCallPopup } from '../../store/popupsSlice';

import './CallButton.scss';

export const CallButton = ({ type }) => {
  const dispatch = useDispatch();
  const callHandler = () => dispatch(openCallPopup());

  return (
    <button
      className={`call-button call-button_type_${type}`}
      type="button"
      onClick={callHandler}
    >
      <span>Обратный звонок</span>
    </button>
  );
};
