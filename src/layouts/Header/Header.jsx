import { CallButton } from '../../components/CallButton';
import { Navigation } from './Navigation';
import { Logo } from '../../components/Logo';

import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header__container'>
          <div className='header__container-left'>
            <Logo />
            <p className='header__location'>Новочебоксарск | Канаш</p>
          </div>
          <div className='header__container-right'>
            <Navigation />
            <CallButton type='header' />
          </div>
        </div>
      </div>
    </header>
  );
};
