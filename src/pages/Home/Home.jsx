import { Promo } from './components/Promo';
import { Bestsellers } from './components/Bestsellers';
import { CatalogSection } from './components/CatalogSection';
import { About } from './components/About';
import { Measure } from './components/Measure';
import { Delivery } from './components/Delivery';
import { Articles } from './components/Articles';
import { Contacts } from './components/Contacts';

export const Home = () => (
  <>
    <Promo />
    <Bestsellers />
    <CatalogSection />
    <About />
    <Measure />
    <Delivery />
    {/* <Articles />
    <Contacts /> */}
  </>
);
