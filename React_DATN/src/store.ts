import { configureStore } from "@reduxjs/toolkit";
import productApi from "./Services/Api_Product";


export const store = configureStore({
    reducer: {
        "products": productApi.reducer
    },
    middleware: defaultMiddleware => defaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch