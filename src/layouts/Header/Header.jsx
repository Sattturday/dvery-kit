import { useEffect, useState } from 'react';

import { CallButton } from '../../components/CallButton';
import { Logo } from '../../components/Logo';

import { Navigation } from './Navigation';
import './Header.scss';

export const Header = () => {
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
    <header className='header'>
      <div
        className={`background ${(menuOpen && ' background_active') || ''}`}
        onClick={handleBurgerClick}
      />
      <div className='wrapper'>
        <div className='header__container'>
          <div className='header__container-left'>
            <Logo />
            <p className='header__location'>Новочебоксарск | Канаш</p>
          </div>
          <div className='header__container-right'>
            <Navigation menuOpen={menuOpen} onBurgerClick={handleBurgerClick} />
            <CallButton type='header' />
          </div>
        </div>
      </div>
    </header>
  );
};
