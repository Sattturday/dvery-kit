import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = ({ isHeader = false }) => {
  return (
    <nav
      className={isHeader ? 'navigation navigation_type_header' : 'navigation'}
    >
      <ul
        className={
          isHeader
            ? 'navigation__list navigation__list_type_header'
            : 'navigation__list'
        }
      >
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/catalog'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/articles'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Сатьи
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/articles'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Замер
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/articles'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Доставка
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/articles'
            className={({ isActive }) => {
              return isActive
                ? 'navigation__item navigation__item_type_active'
                : 'navigation__item';
            }}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
