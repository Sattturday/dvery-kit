import { Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <Link className='logo' to='/' aria-label='Двери-КИТ'>
      <img className='logo__img' src={logo} alt='Логотип Двери-КИТ' />
    </Link>
  );
};
