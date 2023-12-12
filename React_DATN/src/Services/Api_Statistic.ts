import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const statisticApi = createApi({
    reducerPath: "statistic",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    endpoints: (builder) => ({

        CurrentDayStatistics: builder.mutation({
            query: (date) => ({
                url: "/api/generate-daily",
                method: "POST",
                body: date
            }),
        }),

        PastDateStatistics: builder.mutation({
            query: (date) => ({
                url: "/api/generate-qua",
                method: "POST",
                body: date
            }),
        }),

        FutureDateStatistics: builder.mutation({
            query: (date) => ({
                url: "/api/generate-mai",
                method: "POST",
                body: date
            }),
        })
    }),
});

export const { useCurrentDayStatisticsMutation, useFutureDateStatisticsMutation, usePastDateStatisticsMutation } = statisticApi;
export default statisticApi;