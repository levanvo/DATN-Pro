import { configureStore } from "@reduxjs/toolkit";
import productApi from "./Services/Api_Product";
import categoryApi from "./Services/Api_Category";
import userApi from "./Services/Api_User";
import sizeApi from "./Services/Api_Size";
import {colorApi} from "./Services/api_Color"
import cartApi from "./Services/Api_cart";

export const store = configureStore({
    reducer: {
        "products": productApi.reducer,
        "category": categoryApi.reducer,
        "user": userApi.reducer,
        "size": sizeApi.reducer,
        "color": colorApi.reducer,
        "cart": cartApi.reducer,

    },
    middleware: defaultMiddleware => defaultMiddleware().concat(productApi.middleware).concat(categoryApi.middleware).concat(userApi.middleware).concat(sizeApi.middleware).concat(colorApi.middleware).concat(cartApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
