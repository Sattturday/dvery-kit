import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Navigation.scss';
import { CallButton } from '../../../components/CallButton';

export const Navigation = ({ onBurgerClick, menuOpen }) => {
  return (
    <div className='navigation'>
      <span
        className={`burger${(menuOpen && ' burger_active') || ''}`}
        onClick={onBurgerClick}
      >
        <span className='burger__line'></span>
      </span>
      <nav
        className={`navigation__menu${
          (menuOpen && ' navigation__menu_open') || ''
        }`}
      >
        <ul className='navigation__list'>
          <li className='navigation__add'>
            <p className='navigation__location'>Новочебоксарск | Канаш</p>
          </li>
          <li className='navigation__add'>
            <CallButton type='menu' />
          </li>
          <li onClick={menuOpen ? onBurgerClick : undefined}>
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
          <li onClick={menuOpen ? onBurgerClick : undefined}>
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
          <li onClick={menuOpen ? onBurgerClick : undefined}>
            <NavLink
              to='/articles'
              className={({ isActive }) => {
                return isActive
                  ? 'navigation__item navigation__item_type_active'
                  : 'navigation__item';
              }}
            >
              Статьи
            </NavLink>
          </li>
          <li onClick={menuOpen ? onBurgerClick : undefined}>
            <HashLink to='/#measure' className='navigation__item'>
              Замер
            </HashLink>
          </li>
          <li onClick={menuOpen ? onBurgerClick : undefined}>
            <HashLink to='/#delivery' className='navigation__item'>
              Доставка
            </HashLink>
          </li>
          <li onClick={menuOpen ? onBurgerClick : undefined}>
            <HashLink to='/#contacts' className='navigation__item'>
              Контакты
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
