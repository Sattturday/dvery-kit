import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderButton } from '../../../../components/SliderButton';
import { Card } from '../../../../components/Card';
import { cardsExamples } from '../../../../utils/data';

import './Bestsellers.scss';

export const Bestsellers = ({ data }) => {
  const bestsellersSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
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
