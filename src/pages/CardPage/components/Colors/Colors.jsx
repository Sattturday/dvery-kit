import { useState } from 'react';
import { BASE_URL_IMG } from '../../../../utils/constants';
import './Colors.scss';

export const Colors = ({ colors }) => {
  const [isShow, setIsShow] = useState(false);

  const handleShowToggle = () => {
    setIsShow(!isShow);
  };

  const images = document.querySelectorAll('table td img');
  images.forEach((img) => {
    img.removeAttribute('style');
  });

  return (
    <section className='colors'>
      <h2 className='colors__title'>Цвет:</h2>
      <p className='colors__subtitle'>
        Цвет на фотографии не всегда передаёт фактический цвет товара и может
        отличаться.
      </p>

      <div
        className={`colors__items colors__items_${isShow ? 'open' : 'close'}`}
        dangerouslySetInnerHTML={{ __html: colors }}
      />
      <button
        className='colors__show-button'
        type='button'
        onClick={handleShowToggle}
      >
        {isShow ? 'Свернуть' : 'Посмотреть все'}
      </button>
    </section>
  );
};
