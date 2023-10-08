import { configureStore } from "@reduxjs/toolkit";
import productApi from "./Services/Api_Product";
import categoryApi from "./Services/Api_Category";


export const store = configureStore({
    reducer: {
        "products": productApi.reducer,
        "category": categoryApi.reducer
    },
    middleware: defaultMiddleware => defaultMiddleware().concat(productApi.middleware).concat(categoryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch