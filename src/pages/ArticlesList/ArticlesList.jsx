import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetArticlesQuery } from '../../api/articlesApi';
import { ArticleCard } from '../../components/ArticleCard';
import { setArticles } from '../../store/articlesSlice';

import './ArticlesList.scss';
import { messages } from '../../utils/data';

export const ArticlesList = () => {
  const articlesData = useSelector((state) => state.articles.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: articlesApiData, error, isLoading } = useGetArticlesQuery();

  useEffect(() => {
    if (articlesApiData) {
      dispatch(setArticles(articlesApiData));
    }
  }, [articlesApiData, dispatch]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className='articles-list'>
      <div className='wrapper'>
        <div className='articles-list__wrapper'>
          <button
            className='articles-list__button'
            type='button'
            onClick={handleClick}
            aria-label='Вернуться'
          ></button>
          <h1 className='articles-list__title'>Статьи</h1>
        </div>
        {articlesData?.length !== 0 && (
          <ul className='articles-list__items'>
            {articlesData.map((data) => (
              <li key={data.id}>
                <ArticleCard data={data} type='page' />
              </li>
            ))}
          </ul>
        )}
        {isLoading && <p className='info-message'>{messages.loadMessage}</p>}
        {error && <p className='info-message'>{messages.errorMessage}</p>}
      </div>
    </section>
  );
};
