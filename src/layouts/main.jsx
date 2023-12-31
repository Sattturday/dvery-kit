import { useEffect, useState } from 'react';

import { Preloader } from '../components/Preloder';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <Preloader /> : <main>{children}</main>}
      <Footer />
    </>
  );
};
