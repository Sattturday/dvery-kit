import { ProductCard } from '../ProductCard';

import './ShowList.scss';

export const ShowList = ({ data }) => {
  return (
    <div className='show-list'>
      {data.map((card) => {
        return <ProductCard key={card.id} cardData={card} />;
      })}
    </div>
  );
};
