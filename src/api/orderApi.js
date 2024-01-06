import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    postMeasure: builder.mutation({
      query: (body) => ({
        url: '/request_for_measurement/',
        method: 'POST',
        body,
      }),
    }),
    postCallBack: builder.mutation({
      query: (body) => ({
        url: '/request_for_callback/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { usePostMeasureMutation, usePostCallBackMutation } = orderApi;
