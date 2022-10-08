// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const menusApi = createApi({
  reducerPath: 'menusApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api' }),
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => `menus`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMenusQuery } = menusApi;
