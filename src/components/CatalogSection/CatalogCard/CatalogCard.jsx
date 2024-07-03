import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../../Button';
import { setTypeFilter } from '../../../store/filterSlice';

import './CatalogCard.scss';

export const CatalogCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTypeFilter(data.type));
    navigate('/catalog');
  };

  return (
    <div className="catalog-card" onClick={handleClick}>
      <img src={data.img} alt={data.name} className="catalog-card__image" />
      <div className="catalog-card__title-flex">
        <h3 className="catalog-card__title">{data.name}</h3>
      </div>
      <Button />
    </div>
  );
};
