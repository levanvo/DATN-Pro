import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrder } from "../Models/interfaces";

const orderApi = createApi({
  reducerPath: "order",
  tagTypes: ["Order"],
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
    getAllOrder: builder.query<IOrder[], void>({
      query: () => `/api/order`,
      providesTags: ["Order"]
    }),

    getOneOrder: builder.query<IOrder[], number | string>({
      query: (_id) => `/api/order/${_id}`,
      providesTags: ["Order"]
    }),

    addOrder: builder.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/api/order`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Order"]
    }),

    updateOrder: builder.mutation<IOrder, IOrder>({
      query: (order:IOrder) => ({
        url: `/api/order/${order._id}`,
        method: "PUT",
        body: order,
      }),
      invalidatesTags: ["Order"]
    }),

    updatePatchOrder: builder.mutation<any, any>({
      query: (order:any) => ({
        url: `/api/order/${order._id}`,
        method: "PATCH",
        body: order,
      }),
      invalidatesTags: ["Order"]
    }),

    removeOrder: builder.mutation<IOrder, number | string>({
      query: (_id) => ({
        url: `/api/order/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"]
    }),

    
  }),
});

export const {
  useGetAllOrderQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useRemoveOrderMutation,
  useGetOneOrderQuery,
  useUpdatePatchOrderMutation
} = orderApi;
export default orderApi;