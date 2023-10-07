// import { legacy_createStore as createStore, combineReducers } from "redux"
// import example_you_can_remove from "../Handle/example_you_can_remove";

// const root = combineReducers({
//     // bắt có 1 tham chiếu truyền ở đây ko bị lỗi đỏ
//     category_2: example_you_can_remove
// })
// const store = createStore(root);
// export default store;

import productApi, { productReducer } from '../Api/product';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    [productApi.reducerPath]: productReducer,
    // [authApi.reducerPath]: authApi.reducer,
})
const middleware = [productApi.middleware]

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(...middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default persistStore(store);
