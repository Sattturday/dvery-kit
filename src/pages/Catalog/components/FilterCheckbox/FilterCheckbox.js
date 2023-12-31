import './FilterCheckbox.scss';

export function FilterCheckbox({ option, isChecked, onChange }) {
  return (
    <label className='filter-checkbox'>
      <span className='filter-checkbox__title'>{option.name}</span>
      <input
        className='filter-checkbox__input'
        type='checkbox'
        form='filter'
        checked={isChecked || false}
        onChange={onChange}
      />
      <span className='filter-checkbox__input-new'></span>
    </label>
  );
}
