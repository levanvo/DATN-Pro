import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICart, ICartItem } from "../Models/interfaces";
import { pause } from "../utils/pause";

const cartApi = createApi({
    reducerPath: "cart",
    tagTypes: ["Cart"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        prepareHeaders: (headers) => {
            headers.set("Content-type", "appliation/json"),
            headers.set("authorization", "Bearer " + localStorage.getItem("token") || "")
            return headers;
          },
        fetchFn: async (...args) => (
            await pause(1000),
            fetch(...args)
        )
    }),
    endpoints: (builder) => ({
        getCart: builder.query<ICart, void>({
            query: () => "/api/cart",
            providesTags: ["Cart"]
        }),

        addToCart: builder.mutation<ICart, ICartItem[]>({
            query: (products) => ({
                url: "/api/cart/add",
                method: "POST",
                body: { products },
            }),
        invalidatesTags: ["Cart"]

        }),

        deleteFromCart: builder.mutation<ICart, string>({
            query: (productId) => ({
                url: `/api/cart/delete/${productId}`,
                method: "DELETE",
            }),
      invalidatesTags: ["Cart"]

        }),
    }),
});

export const { useGetCartQuery, useAddToCartMutation, useDeleteFromCartMutation } = cartApi;
export default cartApi;