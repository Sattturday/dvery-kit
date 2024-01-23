import { Link } from 'react-router-dom';
import './InputCheckbox.scss';
import { useDispatch } from 'react-redux';
import { closeAllPopups } from '../../store/popupsSlice';

// Функциональный компонент для отображения чекбокса
export function InputCheckbox({
  option,
  type = 'checkbox',
  isChecked,
  onChange,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeAllPopups());
  };

  return (
    <div className={`checkbox checkbox_type_${option.slug}`}>
      <label
        className={`checkbox__label checkbox__label_type_${option.slug}${
          isChecked ? ' checkbox__label_checked' : ''
        }`}
      >
        <input
          type={type}
          className='checkbox__input'
          name={option.slug}
          id={option.slug}
          checked={isChecked || false}
          onChange={() => onChange(option)}
        />
        <span className='checkbox__input-new'></span>
        <p>
          {option.name}
          <Link to={'/privacy'} onClick={handleClick}>
            {option.link}
          </Link>
        </p>
      </label>
    </div>
  );
}
