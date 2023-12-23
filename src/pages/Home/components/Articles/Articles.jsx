import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { setArticles } from '../../../../store/articlesSlice';
import { useGetArticlesQuery } from '../../../../api/articlesApi';
import { SliderButton } from '../../../../components/SliderButton';

import { ArticleCard } from './ArticleCard/ArticleCard';
import './Articles.scss';

export const Articles = () => {
  const dispatch = useDispatch();
  const articlesData = useSelector((state) => state.articles.list);
  const { data: articlesApiData, error, isLoading } = useGetArticlesQuery();

  const articlesSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
  };

  useEffect(() => {
    if (articlesApiData) {
      dispatch(setArticles(articlesApiData));
    }
  }, [articlesApiData, dispatch]);

  return (
    <section className='articles' id='articles'>
      <h2 className='articles__title'>Статьи</h2>
      <Slider {...articlesSettings}>
        {articlesData.map((data) => (
          <div key={data.id} className='articles__container'>
            <ArticleCard data={data} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
