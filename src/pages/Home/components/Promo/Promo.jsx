import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { setTypeFilter } from '../../../../store/filterSlice';
import './Promo.scss';

export const Promo = () => {
  const dispatch = useDispatch();

  const promoSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  const handleClick = type => {
    dispatch(setTypeFilter(type));
  };

  return (
    <section className="promo">
      <Slider {...promoSettings}>
        <div className="promo__item promo__item_1">
          <div className="wrapper">
            <div className="promo__container">
              <h1 className="promo__title">
                Межкомнатные двери в&nbsp;наличии и&nbsp;под&nbsp;заказ
              </h1>
              <p className="promo__subtitle">Хорошим людям - хороший товар!</p>
              <Link
                to="/catalog"
                className="promo__button"
                onClick={() => handleClick('interior_door')}
              >
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
        <div className="promo__item promo__item_2">
          <div className="wrapper">
            <div className="promo__container">
              <h2 className="promo__title">
                Входные двери в&nbsp;наличии и&nbsp;под&nbsp;заказ
              </h2>
              <p className="promo__subtitle">Хорошим людям - хороший товар!</p>
              <Link
                to="/catalog"
                className="promo__button"
                onClick={() => handleClick('entrance_door')}
              >
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
        <div className="promo__item promo__item_3">
          <div className="wrapper">
            <div className="promo__container">
              <h2 className="promo__title">Пластиковые окна под заказ</h2>
              <p className="promo__subtitle">Хорошим людям - хороший товар!</p>
              <Link
                to="/catalog"
                className="promo__button"
                onClick={() => handleClick('window')}
              >
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};
