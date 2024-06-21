import './InputSelect.scss';

// Функциональный компонент для отображения чекбокса
export function InputSelect({
  option,
  type = 'checkbox',
  isChecked,
  onChange,
}) {
  return (
    <label
      className={`select__label${isChecked ? ' select__label_checked' : ''}`}
    >
      <input
        type={type}
        className="select__input"
        name={option.slug}
        id={option.slug}
        checked={isChecked || false}
        onChange={() => onChange(option)}
      />
      <p className="select__name">{option.name}</p>
    </label>
  );
}
