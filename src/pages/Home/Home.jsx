import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useGetHitProductsQuery } from '../../api/productsApi';
import { setHitSale } from '../../store/productsSlice';
import { setArticles } from '../../store/articlesSlice';
import { useGetArticlesQuery } from '../../api/articlesApi';
import { CatalogSection } from '../../components/CatalogSection';

import { Bestsellers } from './components/Bestsellers';
import { Delivery } from './components/Delivery';
import { Articles } from './components/Articles';
import { Contacts } from './components/Contacts';
import { Measure } from './components/Measure';
import { Promo } from './components/Promo';
import { About } from './components/About';

export const Home = () => {
  const dispatch = useDispatch();

  const { data: productsApiData, error, isLoading } = useGetHitProductsQuery();
  const {
    data: articlesApiData,
    error: articlesError,
    isLoading: articlesIsLoading,
  } = useGetArticlesQuery();

  useEffect(() => {
    if (productsApiData) {
      dispatch(setHitSale(productsApiData));
    }
  }, [productsApiData, dispatch]);

  useEffect(() => {
    if (articlesApiData) {
      dispatch(setArticles(articlesApiData));
    }
  }, [articlesApiData, dispatch]);

  return (
    <>
      <Promo />
      {productsApiData?.length !== 0 && (
        <Bestsellers error={error} isLoading={isLoading} />
      )}
      <CatalogSection />
      <About />
      <Measure />
      <Delivery />
      {articlesApiData?.length !== 0 && (
        <Articles error={articlesError} isLoading={articlesIsLoading} />
      )}
      <Contacts />
    </>
  );
};
