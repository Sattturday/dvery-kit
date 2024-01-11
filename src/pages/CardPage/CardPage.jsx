import { useParams } from 'react-router-dom';
import './CardPage.scss';
import { useGetProductByIdQuery } from '../../api/productsApi';
import { Preloader } from '../../components/Preloder';
import { messages } from '../../utils/data';
import { BASE_URL_IMG } from '../../utils/constants';

export const CardPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const src = data ? `${BASE_URL_IMG}${data.productalbum[0].image}` : '';
  return (
    <section className='card-page'>
      <div className='wrapper'>
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <h1 className='info-message'>{messages.errorMessage}</h1>
        ) : (
          <div className='card-page__container'>
            <div className='card-page__slider'>
              <img
                src={src}
                alt={data.productalbum[0].name}
                className='card-page__image'
              />
            </div>
            <div className='card-page__info'>
              <div className='card-page__title-block'>
                <h1 className='card-page__title'>{data.name}</h1>
                {data.for_order && (
                  <span className='card-page__label card-page__label_type_order'>
                    Под заказ
                  </span>
                )}
                {data.for_sale && (
                  <span className='card-page__label card-page__label_type_sale'>
                    Акция
                  </span>
                )}
              </div>
              <div className='card-page__price-container'>
                <p>Цена:&nbsp;</p>
                {data.for_sale ? (
                  <>
                    <span className='card-page__price card-page__price_sale'>
                      {data.old_price}₽&nbsp;
                    </span>
                    <span className='card-page__sale'>{data.price}₽</span>
                  </>
                ) : (
                  <span className='card-page__price'>{data.price}₽</span>
                )}
              </div>
              {data.size.length !== 0 && (
                <div className='card-page__size-block'>
                  <span>Размер:</span>
                  <ul className='card-page__size-list'>
                    {data.size.map((item, index) => (
                      <li key={index}>{item.size}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className='card-page__description'>
                <span>Описание</span>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
