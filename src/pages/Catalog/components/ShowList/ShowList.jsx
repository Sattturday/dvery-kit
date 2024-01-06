import { ProductCard } from '../ProductCard';

import './ShowList.scss';

export const ShowList = ({ data, message }) => {
  return (
    <div className='show-list'>
      {message ? (
        <p className='info-message'>{message}</p>
      ) : (
        data.map((card) => {
          return <ProductCard key={card.id} cardData={card} />;
        })
      )}
    </div>
  );
};
