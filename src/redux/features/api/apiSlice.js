import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (tags) => {
        let queryString = tags?.map((tag) => `tags_like=${tag}`).join('&');
        return `/videos?${queryString}`;
      },
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ id, tags }) => {
        let queryString = tags?.map((tag) => `tags_like=${tag}`).join('&');
        return `/videos?${queryString}&id_ne=${id}&_limit=5`;
      },
    }),
    addVideo: builder.mutation({
      query: (data) => ({ url: `/videos`, method: 'POST', body: data }),
    }),
    updateVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
