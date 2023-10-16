import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../Models/interfaces";
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
    }),

    signup: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/api/signup`,
        method: "POST",
        body: user
      }),
      invalidatesTags: ["User"]
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `/api/forgot-password`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["User"]
    }),

    verificationCodes: builder.mutation({
      query: (code) => ({
        url: "/api/verification-codes",
        method: "POST",
        body: code
      }),
      invalidatesTags: ["User"]
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/api/change-password",
        method: "POST",
        body: data
      })
    })
  }),
});

export const { useGetAllUserQuery, useSiginMutation, useSignupMutation, useForgotPasswordMutation, useVerificationCodesMutation, useChangePasswordMutation } = userApi;
export default userApi;
