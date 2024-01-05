import { messages } from '../../../../utils/data';
import { ProductCard } from '../ProductCard';

import './ShowList.scss';

export const ShowList = ({ data }) => {
  return (
    <div className='show-list'>
      {data.length !== 0 ? (
        data.map((card) => {
          return <ProductCard key={card.id} cardData={card} />;
        })
      ) : (
        <p className='info-message'>{messages.searchMessage}</p>
      )}
    </div>
  );
};
