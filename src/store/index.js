import { configureStore } from '@reduxjs/toolkit';

import { productsApi } from '../api/productsApi';

import { articlesApi } from '../api/articlesApi';

import { orderApi } from '../api/orderApi';

import productsReducer from './productsSlice';
import articlesReducer from './articlesSlice';
import filterReducer from './filterSlice';
import popupsReducer from './popupsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    articles: articlesReducer,
    filter: filterReducer,
    popups: popupsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      articlesApi.middleware,
      orderApi.middleware
    ),
});

export default store;
