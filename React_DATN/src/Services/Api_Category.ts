import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ICategory } from "../Models/interfaces"

const categoryApi = createApi({
    reducerPath: "category",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080`
    }),
    endpoints: (builder) => ({
        getAllCategory: builder.query<ICategory[], void>({
            query: () => `/api/category`
        })
    })
})

export const {useGetAllCategoryQuery} = categoryApi

export default categoryApi