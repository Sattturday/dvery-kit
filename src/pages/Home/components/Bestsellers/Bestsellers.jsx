import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useGetHitProductsQuery } from '../../../../api/productsApi';
import { setHitSale } from '../../../../store/productsSlice';
import { SliderButton } from '../../../../components/SliderButton';
import { Card } from '../../../../components/Card';
import { messages } from '../../../../utils/data';

import './Bestsellers.scss';

export const Bestsellers = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  const dispatch = useDispatch();
  const hitSaleData = useSelector((state) => state.products.hitSale);
  const { data: productsApiData, error, isLoading } = useGetHitProductsQuery();

  useEffect(() => {
    if (productsApiData) {
      dispatch(setHitSale(productsApiData));
    }
  }, [productsApiData, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 530) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else if (screenWidth <= 760) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else if (screenWidth <= 1170) {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      } else if (screenWidth <= 1400) {
        setSlidesToShow(4);
        setSlidesToScroll(3);
      } else {
        setSlidesToShow(5);
        setSlidesToScroll(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bestsellersSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
  };

  return (
    <section className='bestsellers'>
      <h2 className='bestsellers__title'>Хиты продаж</h2>
      <div className='bestsellers__box'>
        {hitSaleData && (
          <Slider {...bestsellersSettings}>
            {hitSaleData.map((cardData) => (
              <div key={cardData.id} className='bestsellers__container'>
                <Card data={cardData} />
              </div>
            ))}
          </Slider>
        )}
        {isLoading && <p className='info-message'>{messages.loadMessage}</p>}
        {error && <p className='info-message'>{messages.errorMessage}</p>}
      </div>
    </section>
  );
};
