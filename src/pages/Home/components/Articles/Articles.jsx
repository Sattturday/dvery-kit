import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArticleCard } from '../../../../components/ArticleCard';
import { SliderButton } from '../../../../components/SliderButton';
import { messages } from '../../../../utils/data';

import './Articles.scss';

export const Articles = ({ error, isLoading }) => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const articlesData = useSelector((state) => state.articles.list);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 650) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const articlesSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SliderButton type="prev" />,
    nextArrow: <SliderButton type="next" />,
  };

  return (
    <section className="articles" id="articles">
      <h2 className="articles__title">Статьи</h2>
      {articlesData && (
        <Slider {...articlesSettings}>
          {articlesData.map((data) => (
            <div key={data.id} className="articles__container">
              <ArticleCard data={data} />
            </div>
          ))}
        </Slider>
      )}
      {isLoading && <p className="info-message">{messages.loadMessage}</p>}
      {error && <p className="info-message">{messages.errorMessage}</p>}
    </section>
  );
};
