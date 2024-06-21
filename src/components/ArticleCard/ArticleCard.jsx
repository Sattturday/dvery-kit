import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import './ArticleCard.scss';

export const ArticleCard = ({ data, type = 'home' }) => {
  const sourceDateString = data?.date;
  const sourceDate = moment(sourceDateString);
  const formattedDate = sourceDate.locale('ru').format('D MMMM YYYY, HH:mm');

  return (
    <div className={`article-card article-card_type_${type}`}>
      {type === 'page' && (
        <img
          className="article-card__image"
          src={data.image}
          alt="Фото к статье"
        />
      )}
      <div className={`article-card__column article-card__column_type_${type}`}>
        <h3 className="article-card__title">{data?.title}</h3>
        <span className="article-card__date">{formattedDate}</span>
        <p
          className="article-card__text"
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
        <Link to={`/articles/${data?.id}`} className="article-card__link">
          Читать далее →
        </Link>
      </div>
    </div>
  );
};
