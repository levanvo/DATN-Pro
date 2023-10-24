import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../Models/interfaces";
import { pause } from "../utils/pause";

const productApi = createApi({
  reducerPath: "products",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080`,
    fetchFn: async (...args) => (
        await pause(1000),
        fetch(...args)
    )
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<IProduct[], void>({
      query: () => `/api/products`,
      providesTags: ["Product"]
    }),

    getOneProduct: builder.query<IProduct, number | string>({
      query: (id) => `/api/product/${id}`,
      providesTags: ["Product"]
    }),

    addProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/api/product`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    deleteProduct: builder.mutation<void,number | string>({
        query: (id) => ({
            url: `/api/product/${id}`,
            method: "DELETE",
        }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: builder.mutation<IProduct,IProduct>({
      query: (product) => ({
        url: `/api/product/${product._id}`,
        method: "PATCH"
      }),
      invalidatesTags: ["Product"]
    }),

    updatesProduct: builder.mutation<IProduct,IProduct>({
      query: (products) => ({
        url: `/api/products/${products._id}`,
        method: "PUT",
        body:products
      }),
      invalidatesTags: ["Product"]
    })
  }),
});

export const { 
  useGetAllProductQuery,
   useAddProductMutation,
   useDeleteProductMutation, 
   useGetOneProductQuery, 
   useUpdateProductMutation,
   useUpdatesProductMutation
   } = productApi;
export default productApi;
