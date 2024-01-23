import { useNavigate } from 'react-router-dom';

import { BASE_URL_IMG } from '../../utils/constants';
import { formatPrice } from '../../utils/utils';
import { Button } from '../Button/Button';

import './Card.scss';

export const Card = ({ data }) => {
  const navigate = useNavigate();

  const src =
    data.productalbum.length !== 0
      ? `${BASE_URL_IMG}${data.productalbum[0].image}`
      : '';

  const alt =
    data.productalbum.length !== 0 ? `${data.productalbum[0].name}` : '';

  const handleClick = () => {
    navigate(`/cards/${data.id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
      <div className='card__labels'>
        {data.for_sale && (
          <span className='card__label card__label_type_sale'>Акция</span>
        )}
        {data.for_order && (
          <span className='card__label card__label_type_order'>Под заказ </span>
        )}
      </div>
      <img src={src} alt={alt} className='card__image' />
      <div className='card__info'>
        <h3 className='card__title'>{data.name}</h3>
        <div className='card__price-container'>
          <p>Цена:&nbsp;</p>
          {data.for_sale ? (
            <>
              <span className='card__price card__price_sale'>
                {formatPrice(data.old_price)}₽&nbsp;
              </span>
              <span className='card__sale'>{formatPrice(data.price)}₽</span>
            </>
          ) : (
            <span className='card__price'>{formatPrice(data.price)}₽</span>
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};
