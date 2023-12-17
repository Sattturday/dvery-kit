import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = ({ isHeader = false }) => {
  return (
    <Link className='logo' to='/'>
      {isHeader ? (
        <h1 className='logo__title'>Двери-КИТ</h1>
      ) : (
        <h2 className='logo__title'>Двери-КИТ</h2>
      )}
      <p className='logo__subtitle'>Купцалов И Товарищи</p>
    </Link>
  );
};
