import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './articlesSlice';
import { articlesApi } from '../api/articlesApi';

export default configureStore({
  reducer: {
    articles: articlesReducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});
