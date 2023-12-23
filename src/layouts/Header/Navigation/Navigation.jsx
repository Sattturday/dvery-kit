import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Navigation.scss';
import { CallButton } from '../../../components/CallButton';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleBurgerClick() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('page_lock');
    } else {
      document.body.classList.remove('page_lock');
    }
  }, [menuOpen]);

  return (
    <div className='navigation'>
      <span
        className={`burger${(menuOpen && ' burger_active') || ''}`}
        onClick={handleBurgerClick}
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
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
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
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
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
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
            <HashLink to='/#articles' className='navigation__item'>
              Статьи
            </HashLink>
          </li>
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
            <HashLink to='/#measure' className='navigation__item'>
              Замер
            </HashLink>
          </li>
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
            <HashLink to='/#delivery' className='navigation__item'>
              Доставка
            </HashLink>
          </li>
          <li onClick={menuOpen ? handleBurgerClick : undefined}>
            <HashLink to='/#contacts' className='navigation__item'>
              Контакты
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
