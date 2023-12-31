import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHitProducts: builder.query({
      query: () => '/products/?hit_sale=true',
    }),
    getFilterProducts: builder.query({
      query: ([params = '']) => `/products/${params ? '?' + params : ''}`,
    }),
  }),
});

export const { useGetHitProductsQuery, useGetFilterProductsQuery } =
  productsApi;
