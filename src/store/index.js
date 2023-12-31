import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import articlesReducer from './articlesSlice';
import filterReducer from './filterSlice';
import { productsApi } from '../api/productsApi';
import { articlesApi } from '../api/articlesApi';

const store = configureStore({
  reducer: {
    products: productsReducer,
    articles: articlesReducer,
    filter: filterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      articlesApi.middleware
    ),
});

export default store;
