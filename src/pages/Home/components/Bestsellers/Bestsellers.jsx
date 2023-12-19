import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card } from '../../../../components/Card/Card';
import { cardsExamples } from '../../../../utils/data';
import './Bestsellers.scss';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className='custom-arrow custom-arrow_type_prev'
      type='button'
      onClick={onClick}
    ></button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className='custom-arrow custom-arrow_type_next'
      type='button'
      onClick={onClick}
    ></button>
  );
};

export const Bestsellers = ({ data }) => {
  const bestsellersSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className='bestsellers'>
      <h2 className='bestsellers__title'>Хиты продаж</h2>
      <Slider {...bestsellersSettings}>
        {cardsExamples.map((cardData) => (
          <div key={cardData.id} className='bestsellers__container'>
            <Card data={cardData} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
