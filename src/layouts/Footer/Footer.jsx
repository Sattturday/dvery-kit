import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { CallButton } from '../../components/CallButton';

import './Footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='wrapper'>
      <div className='footer__container'>
        <Logo isHeader={true} />
        <p className='header__location'>Новочебоксарск | Канаш</p>
        <Navigation />
        <CallButton />
      </div>
    </div>
  </footer>
);
