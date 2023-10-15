import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IUser } from "../Models/interfaces";
import { pause } from "../utils/pause";

const userApi = createApi({
  reducerPath: "user",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080`,
    fetchFn: async (...args) => (
      await pause(1000),
      fetch(...args)
    )
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query<IUser[], void>({
      query: () => `/api/allUser`,
      providesTags: ["User"]
    }),

    sigin: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/api/signin`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"]
    })
  }),
});

export const { useGetAllUserQuery, useSiginMutation } = userApi;
export default userApi;
