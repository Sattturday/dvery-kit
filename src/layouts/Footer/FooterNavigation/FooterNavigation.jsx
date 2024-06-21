import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './FooterNavigation.scss';

export const FooterNavigation = () => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav__list">
        <li>
          <NavLink to="/" className="footer-nav__item">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="footer-nav__item">
            Каталог
          </NavLink>
        </li>
        <li>
          <HashLink to="/#articles" className="footer-nav__item">
            Статьи
          </HashLink>
        </li>
        <li>
          <HashLink to="/#measure" className="footer-nav__item">
            Замер
          </HashLink>
        </li>
        <li>
          <HashLink to="/#delivery" className="footer-nav__item">
            Доставка
          </HashLink>
        </li>
        <li>
          <HashLink to="/#contacts" className="footer-nav__item">
            Контакты
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
