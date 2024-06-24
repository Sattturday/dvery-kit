import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useClickOutside } from '../../../../hooks/useClickOutside';
import { sortButtons } from '../../../../utils/filterData';

import './Sort.scss';

export function Sort({ sortHandler }) {
  const [isActive, setIsActive] = useState(false);
  const [buttonName, setButtonName] = useState('По возрастанию');

  const { ordering } = useSelector(state => state.filter);

  const sortRef = useRef(null);

  // Использование кастомного хука, который определяет клик вне определенной области
  useClickOutside(sortRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  // Обработчик клика для открытия/закрытия панели сортировки
  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  // Обработчик сортировки при выборе опции сортировки
  const onClickSortHandler = e => {
    sortHandler(e.target.id);

    // Устанавливаем название кнопки в зависимости от выбранной опции
    const selectedButton = sortButtons.find(
      button => button.id === e.target.id,
    );
    if (selectedButton) {
      setButtonName(selectedButton.title);
    }

    onClickNavTab();
  };

  return (
    <div className={`sort${isActive ? ' sort_active' : ''}`} ref={sortRef}>
      {/* Контейнер для функционала сортировки */}
      <div
        className={`sort__wrapper${isActive ? ' sort__wrapper_active' : ''}`}
      >
        <button className="sort__button" type="button" onClick={onClickNavTab}>
          {buttonName}
          <span className="sort__arrow"></span>
        </button>
        <button
          className={`sort__button-s sort__button-s_${
            buttonName === 'По возрастанию' ? 'up' : 'down'
          }`}
          type="button"
          onClick={onClickNavTab}
        ></button>
      </div>
      {/* Список опций сортировки */}
      <ul className={`sort__list ${isActive ? 'sort__list_active' : ''}`}>
        {/* Перебор sortButtons для отображения отдельных опций сортировки */}
        {sortButtons.map(button => {
          return (
            <li className="sort__item" key={button.id}>
              {/* Кнопка, представляющая каждую опцию сортировки */}
              <label className="sort__label">
                <input
                  id={button.id}
                  className="sort__radio"
                  type="radio"
                  name={button.id}
                  checked={ordering === button.id}
                  onChange={onClickSortHandler}
                />
                <span>{button.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
