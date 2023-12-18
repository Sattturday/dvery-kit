import { Card } from '../../../../components/Card/Card';
import { cardsExamples } from '../../../../utils/data';
import './Bestsellers.scss';

export const Bestsellers = () => {
  return (
    <section className='bestsellers'>
      <div className='wrapper'>
        <h2 className='bestsellers__title'>Хит продаж</h2>
        <Card data={cardsExamples[0]} />
        <Card data={cardsExamples[1]} />
      </div>
    </section>
  );
};
