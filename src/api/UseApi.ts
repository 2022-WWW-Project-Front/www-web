import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resArtistListTypes, resArtistDetailTypes, resArtworkListTypes, resArtworkDetailTypes } from './Types'

export const UseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.wwweb.kr/api'
  }),
  endpoints: (builder) => ({
    artistList: builder.query<resArtistListTypes, void>({
      query: () => '/artists'
    }),
    artistDetail: builder.query<resArtistDetailTypes, string | undefined>({
      query: (id) => `/artists/${id}`
    }),
    artworktList: builder.query<resArtworkListTypes, void>({
      query: () => '/asset/all'
    }),
    artworkDetail: builder.query<resArtworkDetailTypes, string | undefined>({
      query: (id) => `/artworks/${id}`
    })
  })
})

export const { useArtistListQuery, useArtistDetailQuery, useArtworktListQuery, useArtworkDetailQuery } = UseApi
