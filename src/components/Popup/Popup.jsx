import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeAllModals } from '../../../store/modalsSlice';
import { ReactComponent as CloseImage } from '../../../images/Popup/btn-close.svg';
import './Popup.scss';

export const Popup = ({
  isOpen,
  name,
  children,
  title = '',
  className = '',
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals());
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.body.classList.add('page_lock');

    return () => {
      document.body.classList.remove('page_lock');
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, dispatch]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAllModals());
    }
  };

  return (
    <div
      className={`popup${(isOpen && ' popup_opened') || ''} popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div
        className={`popup__container popup__container_type_${name} ${
          className ? className : ''
        }`}
      >
        {title && <h2 className='popup__title'>{title}</h2>}
        {children}
        <button
          className={`popup__close-btn popup__close-btn_${name}`}
          type='button'
          onClick={() => dispatch(closeAllModals())}
        >
          <CloseImage className='popup__close-image' />
        </button>
      </div>
    </div>
  );
};
