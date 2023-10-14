import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IUser } from "../Models/interfaces";
import { pause } from "../utils/pause";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080`,
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query<IUser[], void>({
      query: () => `/api/allUser`,
    }),

    sigin: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/api/signin`,
        method: "POST",
        body: user,
      }),

    })
  }),
});

export const { useGetAllUserQuery, useSiginMutation } = userApi;
export default userApi;
