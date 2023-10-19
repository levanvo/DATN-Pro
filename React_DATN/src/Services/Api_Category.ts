import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory, IProduct } from "../Models/interfaces"

const categoryApi = createApi({
    reducerPath: "category",
    tagTypes: ["Category"],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080`
    }),
    endpoints: (builder) => ({
        getAllCategory: builder.query<ICategory[], void>({
            query: () => `/api/category`
        }),

        getOneCategory: builder.query<ICategory, number | string>({
            query: (id) => `/api/category/${id}`,
            providesTags: ["Category"]
        }),

        addCategory: builder.mutation<ICategory, ICategory>({
            query: (Category) => ({
                url: `/api/category`,
                method: "POST",
                body: Category,
            }),
            invalidatesTags: ["Category"]
        }),
        removeCategory: builder.mutation({
            query: (id) => ({
                url: `api/category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),

        updateCategory: builder.mutation<ICategory, ICategory>({
            query: (category) => ({
                url: `/api/category/${category._id}/update`,
                method: "PATCH"
            }),
            invalidatesTags: ["Category"]
        }),

        //Lấy sản phẩm theo danh mục
        getProductsByCategory: builder.query({
            query: (categoryId) => `/api/category/${categoryId}/products`,
        }),
    })
})

export const { useGetAllCategoryQuery,
    useAddCategoryMutation,
    useRemoveCategoryMutation,
    useUpdateCategoryMutation,
    useGetOneCategoryQuery,
    useGetProductsByCategoryQuery } = categoryApi

export default categoryApi