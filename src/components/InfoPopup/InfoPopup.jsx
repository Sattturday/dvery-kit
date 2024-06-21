import { useSelector, useDispatch } from 'react-redux';

import { closeAllPopups } from '../../store/popupsSlice';
import { Popup } from '../Popup';

export function InfoPopup() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.popups.message);

  return (
    <Popup
      isOpen={message}
      name="info"
      onClose={() => dispatch(closeAllPopups())}
    >
      <p className="popup__title popup__title_info">{message}</p>
    </Popup>
  );
}
