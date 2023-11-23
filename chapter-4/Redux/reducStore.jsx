import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import  ZomatoApiReducer, { ZomatoApi } from "./zomatoSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        [ZomatoApi.reducerPath]:ZomatoApi.reducer,
        ZomatoApi:ZomatoApiReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(ZomatoApi.middleware)
})

export default store;