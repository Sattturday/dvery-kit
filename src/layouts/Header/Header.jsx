import { Logo } from '../../components/Logo';
import { CallButton } from '../../components/CallButton';
import { Navigation } from '../../components/Navigation';

import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header__container'>
          <div className='header__container-left'>
            <Logo isHeader={true} />
            <p className='header__location'>Новочебоксарск | Канаш</p>
          </div>
          <div className='header__container-right'>
            <Navigation isHeader={true} />
            <CallButton />
          </div>
        </div>
      </div>
    </header>
  );
};
