import { useSelector, useDispatch } from 'react-redux';

import { BASE_URL_IMG } from '../../utils/constants';
import { closeAllPopups } from '../../store/popupsSlice';
import { Popup } from '../Popup';

function ImagePopup() {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.popups.image);
  const isOpen = useSelector((state) => state.popups.isOpenImagePopup);

  const src = image ? `${BASE_URL_IMG}${image.image}` : '';

  return (
    <Popup
      isOpen={isOpen}
      name='image'
      onClose={() => dispatch(closeAllPopups())}
    >
      <img className='popup__image' src={src} alt={image.name} />
    </Popup>
  );
}

export default ImagePopup;
