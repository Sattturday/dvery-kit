import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'bac0ab7d-6ec4-4cad-b298-0e828f712b2b';
const apiBaseUrl = 'https://kinopoiskapiunofficial.tech/api';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: '/v2.2/films/collections?type=TOP_POPULAR_ALL',
        headers: new Headers({ 'X-API-KEY': apiKey }),
      }),
    }),
    getMoviesById: builder.query({
      query: (id) => ({
        url: `/v2.2/films/${id}`,
        headers: new Headers({ 'X-API-KEY': apiKey }),
      }),
    }),
    searchMovies: builder.query({
      query: (params = '') => ({
        url: `/v2.1/films/search-by-keyword?keyword=${params ? params : ''}`,
        headers: new Headers({ 'X-API-KEY': apiKey }),
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesByIdQuery,
  useSearchMoviesQuery,
} = moviesApi;
