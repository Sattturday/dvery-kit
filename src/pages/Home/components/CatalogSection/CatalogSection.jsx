import { catalogData } from '../../../../utils/data';
import { CatalogCard } from './components/CatalogCard';
import './CatalogSection.scss';

export const CatalogSection = () => {
  return (
    <section className='catalog'>
      <div className='wrapper'>
        <h2 className='catalog__title'>Каталог</h2>
        <ul className='catalog__list'>
          {catalogData.map((data) => (
            <li key={data.id} className='catalog__item'>
              <CatalogCard data={data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
