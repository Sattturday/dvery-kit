import { useState } from 'react';
import { BASE_URL_IMG } from '../../../../utils/constants';
import './Colors.scss';

export const Colors = ({ colors }) => {
  const [isShow, setIsShow] = useState(false);
  const handleShowToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <section className='colors'>
      <h2 className='colors__title'>Цвет:</h2>
      <p className='colors__subtitle'>
        Цвет на фотографии не всегда передаёт фактический цвет товара и может
        отличаться.
      </p>
      <ul className={`colors__list colors__list_${isShow ? 'open' : 'close'}`}>
        {colors.map((color, index) => (
          <li key={index} className='colors__block'>
            <h3 className='colors__block-title'>{color.name}</h3>
            <img
              className='colors__image'
              src={`${BASE_URL_IMG}${color.image}`}
              alt={color.name}
            />
          </li>
        ))}
      </ul>
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
