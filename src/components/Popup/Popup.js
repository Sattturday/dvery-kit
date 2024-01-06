import { useEffect } from 'react';

import './Popup.scss';

export const Popup = ({ isOpen, name, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.body.classList.add('page_lock');

    return () => {
      document.body.classList.remove('page_lock');
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup${(isOpen && ' popup_opened') || ''} popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button className='popup__close' type='button' onClick={onClose} />
      </div>
    </div>
  );
};
