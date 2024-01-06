import { catalogData } from '../../../../utils/data';
import { CatalogCard } from './CatalogCard';
import './CatalogSection.scss';

export const CatalogSection = () => {
  return (
    <section className='catalog-section'>
      <div className='wrapper'>
        <h2 className='catalog-section__title'>Каталог</h2>
        <ul className='catalog-section__list'>
          {catalogData.map((data) => (
            <li key={data.id} className='catalog-section__item'>
              <CatalogCard data={data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
