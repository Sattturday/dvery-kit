import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { setCategoryFilter, setTypeFilter } from '../../store/filterSlice';
import { useGetProductByIdQuery } from '../../api/productsApi';
import { findTitleByCategory, formatPrice } from '../../utils/utils';
import { filterOptions } from '../../utils/filterData';
import { messages } from '../../utils/data';
import { Preloader } from '../../components/Preloder';

import { ImagesSlider } from './components/ImagesSlider/ImagesSlider';
import { Colors } from './components/Colors/Colors';
import { SubProducts } from './components/SubProducts';
import './CardPage.scss';

export const CardPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [images, setImages] = useState([]);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceDifference = data?.for_sale ? data?.old_price - data?.price : null;
  const sale = data?.for_sale
    ? `-${Math.round((priceDifference / data.old_price) * 100)}%`
    : '';

  useEffect(() => {
    if (data && data.productalbum.length !== 0) {
      setImages(data.productalbum);
    }
    if (data) {
      dispatch(setTypeFilter(data.type));
    }

    if (data && data.category !== 'None') {
      dispatch(setCategoryFilter(data.category));
    }

    if (data && data.category === 'None') {
      dispatch(setCategoryFilter(''));
    }
  }, [data]);

  const handleClick = () => {
    navigate('/catalog');
  };

  const handleClickType = () => {
    if (filter['category']) {
      dispatch(setCategoryFilter(''));
    }
    navigate('/catalog');
  };

  return (
    <>
      <section className="card-page">
        <div className="wrapper">
          {isLoading ? (
            <Preloader />
          ) : error ? (
            <h1 className="info-message">{messages.errorMessage}</h1>
          ) : (
            <>
              <div className="card-page__breadcrumb">
                <button
                  className="card-page__breadcrumb-btn"
                  type="button"
                  onClick={handleClick}
                  aria-label="Вернуться"
                />
                <p className="card-page__type" onClick={handleClickType}>
                  {data && findTitleByCategory(filter['type'], filterOptions)}
                </p>
              </div>
              <p className="card-page__category" onClick={handleClick}>
                {data && findTitleByCategory(filter['category'], filterOptions)}
              </p>
              <div className="card-page__container">
                <ImagesSlider images={images} sale={sale} />
                <div className="card-page__info">
                  <div className="card-page__title-block">
                    <h1 className="card-page__title">{data.name}</h1>
                    {(data.for_sale || data.for_order || data.new) && (
                      <div>
                        {data.for_order && (
                          <span className="card-page__label card-page__label_type_order">
                            Под заказ
                          </span>
                        )}
                        {data.new && (
                          <span className="card-page__label card-page__label_type_new">
                            Новинка
                          </span>
                        )}
                        {data.for_sale && (
                          <span className="card-page__label card-page__label_type_sale">
                            {sale}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="card-page__price-container">
                    <p>Цена:&nbsp;</p>
                    {data.for_sale ? (
                      <>
                        <span className="card-page__price card-page__price_sale">
                          {formatPrice(data.old_price)}₽&nbsp;
                        </span>
                        <span className="card-page__sale">
                          {formatPrice(data.price)}₽
                        </span>
                      </>
                    ) : (
                      <span className="card-page__price">
                        {formatPrice(data.price)}₽
                      </span>
                    )}
                  </div>
                  {data.size.length !== 0 && (
                    <div className="card-page__size-block">
                      <span>Размер:</span>
                      <ul className="card-page__size-list">
                        {data.size.map((item, index) => (
                          <li key={index}>{item.size}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="card-page__description">
                  <h2>Описание</h2>
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
              </div>
              {data.color_product && <Colors colors={data.color_product} />}
            </>
          )}
        </div>
      </section>
      {data && data.subproduct.length !== 0 && (
        <SubProducts subData={data.subproduct} />
      )}
    </>
  );
};
