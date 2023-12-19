import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../../components/Button/Button';
import './CatalogCard.scss';

export const CatalogCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className='catalog-card' onClick={handleClick}>
      <img src={data.img} alt={data.name} className='catalog-card__image' />
      <h3 className='catalog-card__title'>{data.name}</h3>
      <Button />
    </div>
  );
};
