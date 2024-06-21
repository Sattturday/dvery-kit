import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderButton } from '../../../../components/SliderButton';
import { Card } from '../../../../components/Card';

import './SubProducts.scss';

export const SubProducts = ({ subData }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 530) {
        setSlidesToShow(1);
      } else if (screenWidth <= 760) {
        setSlidesToShow(2);
      } else if (screenWidth <= 1170) {
        setSlidesToShow(3);
      } else if (screenWidth <= 1400) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const subProdSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SliderButton type="prev" />,
    nextArrow: <SliderButton type="next" />,
  };

  return (
    <section className="sub-prod">
      <h2 className="sub-prod__title">С этим товаром покупают</h2>
      <div className="sub-prod__box">
        {subData && (
          <Slider {...subProdSettings}>
            {subData.map((cardData) => (
              <div key={cardData.id} className="sub-prod__container">
                <Card data={cardData} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};
