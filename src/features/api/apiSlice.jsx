import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/"}),
        tagTypes: ['Cabins'],
        endpoints: builder => (
            {
                getCabins: builder.query({
                    query: () => 'api/cabins',
                    providesTags: ['Cabins']
                }),
                addCabin: builder.mutation({
                    query: cabin => ({
                        url: 'api/cabins/',
                        method: 'POST',
                        body: cabin,
                    }),
                    invalidatesTags: ['Cabins']
                }),
                updateCabin: builder.mutation({
                    query: (cabin) => ({
                        url: `api/cabins/${cabin.id}/`,
                        method: 'PUT',
                        body: cabin,
                    }),
                    invalidatesTags: ['Cabins']
                }),
                removeCabin: builder.mutation({
                    query: ({ id }) => ({
                        url: `api/cabins/${id}`,
                        method: 'DELETE',
                        body: id,
                    }),
                    invalidatesTags: ['Cabins']
                }),
                
            }
        )
    }
)

export const { useGetCabinsQuery, useAddCabinMutation, useRemoveCabinMutation, useUpdateCabinMutation } = apiSlice
