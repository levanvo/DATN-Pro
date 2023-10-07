import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interfaces/product"

const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080`
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query<IProduct[],void>({
            query: () => `/api/products`
        }),
        addProduct: builder.mutation<IProduct,IProduct>({
            query: (product) => ({
                url: `/api/product`,
                method: "POST",
                body: product
            })
        })
    })
})

export const {useGetAllProductQuery, useAddProductMutation} = productApi
export default productApi