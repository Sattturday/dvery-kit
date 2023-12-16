import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './moviesSlice';
import searchReducer from './searchSlice';
import { moviesApi } from '../api/moviesApi';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
