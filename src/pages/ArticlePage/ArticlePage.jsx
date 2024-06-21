import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import { useGetArticleByIdQuery } from '../../api/articlesApi';
import { messages } from '../../utils/data';

import './ArticlePage.scss';

export const ArticlePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetArticleByIdQuery(id);
  const sourceDateString = data?.date;
  const sourceDate = moment(sourceDateString);
  const formattedDate = sourceDate.locale('ru').format('D MMMM YYYY, HH:mm');

  return (
    <section className="articles-page">
      <div className="wrapper">
        {data && (
          <>
            <div className="articles-page__links">
              <Link className="articles-page__crumb" to={'/'}>
                Главная ›
              </Link>

              <Link className="articles-page__crumb" to={'/articles'}>
                Статьи ›
              </Link>
              <p className="articles-page__crumb" to={'/'}>
                {data.title}
              </p>
            </div>
            <h1 className="articles-page__title">{data.title}</h1>
            <p className="articles-page__date">{formattedDate}</p>
            <div
              className="articles-page__text"
              dangerouslySetInnerHTML={{ __html: data?.text }}
            />
          </>
        )}
        {isLoading && <p className="info-message">{messages.loadMessage}</p>}
        {error && <p className="info-message">{messages.errorMessage}</p>}
      </div>
    </section>
  );
};
