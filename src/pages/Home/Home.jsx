import { Promo } from './components/Promo';
import { Bestsellers } from './components/Bestsellers';
import { CatalogSection } from './components/CatalogSection';
import { About } from './components/About';
import { Measure } from './components/Measure';

export const Home = () => (
  <>
    <Promo />
    <Bestsellers />
    <CatalogSection />
    <About />
    <Measure />
  </>
);
