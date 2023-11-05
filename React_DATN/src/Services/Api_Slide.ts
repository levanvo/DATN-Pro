import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISlider } from "../Models/interfaces";
import { pause } from "../utils/pause";

const slideApi = createApi({
  reducerPath: "slide",
  tagTypes: ["Slide"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders(headers, api) {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", token)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllSlide: builder.query<ISlider[], void>({
      query: () => `/api/slider`,
      providesTags: ["Slide"]
    }),

    getOneSlide: builder.query<ISlider[], number | string>({
      query: (_id) => `/api/slider/${_id}`,
      providesTags: ["Slide"]
    }),

    addSlide: builder.mutation<ISlider, ISlider>({
      query: (user) => ({
        url: `/api/slider`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Slide"]
    }),

    updateSlide: builder.mutation<ISlider, ISlider>({
      query: (user:ISlider) => ({
        url: `/api/slider/${user._id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Slide"]
    }),

    removeSlide: builder.mutation<ISlider, number | string>({
      query: (_id) => ({
        url: `/api/slider/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Slide"]
    }),

    
  }),
});

export const {
  useGetAllSlideQuery,
  useAddSlideMutation,
  useUpdateSlideMutation,
  useRemoveSlideMutation,
  useGetOneSlideQuery
} = slideApi;
export default slideApi;