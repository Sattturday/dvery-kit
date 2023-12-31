import { Logo } from '../../components/Logo';
import { FooterNavigation } from './FooterNavigation';
import { CallButton } from '../../components/CallButton';
import { Social } from '../../components/Social';

import './Footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='wrapper'>
      <div className='footer__container'>
        <Logo />
        <FooterNavigation />
        <div className='footer__item-right'>
          <CallButton type='footer' />
          <Social />
        </div>
      </div>
    </div>
  </footer>
);
