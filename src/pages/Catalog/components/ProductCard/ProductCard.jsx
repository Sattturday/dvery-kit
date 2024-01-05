import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { BASE_URL_IMG } from '../../../../utils/constants';

import './ProductCard.scss';

export const ProductCard = ({ cardData }) => {
  const navigate = useNavigate();

  const src = `${BASE_URL_IMG}${cardData.productalbum[0].image}`;
  const handleClick = () => {
    navigate(`/cards/${cardData.id}`);
  };

  return (
    <div className='product-card' onClick={handleClick}>
      <div className='product-card__labels'>
        {cardData.for_sale && (
          <span className='product-card__label product-card__label_type_sale'>
            Акция
          </span>
        )}
        {cardData.for_order && (
          <span className='product-card__label product-card__label_type_order'>
            Под заказ{' '}
          </span>
        )}
      </div>
      <img src={src} alt={cardData.name} className='product-card__image' />
      <div className='product-card__info'>
        <h3 className='product-card__title'>{cardData.name}</h3>
        <div className='product-card__price-container'>
          <p>Цена:&nbsp;</p>
          {cardData.for_sale ? (
            <>
              <span className='product-card__price product-card__price_sale'>
                {cardData.old_price}&nbsp;
              </span>
              <span className='product-card__sale'>{cardData.price}</span>
            </>
          ) : (
            <span className='product-card__price'>{cardData.price}</span>
          )}
        </div>
      </div>
      <Button size='small' />
    </div>
  );
};
