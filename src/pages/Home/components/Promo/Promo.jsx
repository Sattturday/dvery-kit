import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Promo.scss';

export const Promo = () => {
  const promoSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <section className='promo'>
      <Slider {...promoSettings}>
        <div className='promo__item promo__item_1'>
          <div className='wrapper'>
            <div className='promo__container'>
              <h1 className='promo__title'>
                Межкомнатные двери от&nbsp;1700&nbsp;₽
              </h1>
              <p className='promo__subtitle'>Хорошим людям - хороший товар!</p>
              <Link to='/catalog' className='promo__button'>
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
        <div className='promo__item promo__item_2'>
          <div className='wrapper'>
            <div className='promo__container'>
              <h2 className='promo__title'>
                Входные двери от&nbsp;7990&nbsp;₽
              </h2>
              <p className='promo__subtitle'>Хорошим людям - хороший товар!</p>
              <Link to='/catalog' className='promo__button'>
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
        <div className='promo__item promo__item_3'>
          <div className='wrapper'>
            <div className='promo__container'>
              <h2 className='promo__title'>Пластиковые окна под заказ</h2>
              <p className='promo__subtitle'>Хорошим людям - хороший товар!</p>
              <Link to='/catalog' className='promo__button'>
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};
