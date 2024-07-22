import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getHitProducts: builder.query({
      query: () => '/products/?hit_sale=true',
    }),
    getFilterRange: builder.query({
      query: () => '/products/min_max_price/',
    }),
    getFilterProducts: builder.query({
      query: ([params = '']) =>
        `/products/${
          params
            ? '?' + params
            : '?limit=8&offset=0&ordering=price&type=entrance_door'
        }`,
    }),
    getProductById: builder.query({
      query: id => `/products/${id}/`,
    }),
  }),
});

export const {
  useGetHitProductsQuery,
  useGetFilterRangeQuery,
  useGetFilterProductsQuery,
  useGetProductByIdQuery,
} = productsApi;
