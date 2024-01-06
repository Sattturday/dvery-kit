import './InputCheckbox.scss';

// Функциональный компонент для отображения чекбокса
export function InputCheckbox({
  option,
  type = 'checkbox',
  isChecked,
  onChange,
}) {
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
        <p>{option.name}</p>
      </label>
    </div>
  );
}
