import { Logo } from '../../components/Logo';

import { CallButton } from '../../components/CallButton';
import { Social } from '../../components/Social';

import { FooterNavigation } from './FooterNavigation';

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
