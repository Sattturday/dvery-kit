import { Link } from 'react-router-dom';

import logo from '../../images/icons/newLogo.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <Link className="logo" to="/" aria-label="Двери и Окна ОРТ">
      <img className="logo__img" src={logo} alt="Логотип Двери и Окна ОРТ" />
      <div className="logo__text">Двери и Окна ОРТ</div>
    </Link>
  );
};
