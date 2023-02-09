import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filterSlice";
import filterKeyReducer from "./features/filterKeySlice";
import cartReducer from "./features/cartSlice"
import shopReducer from "./features/shopSlice"

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        filterKey: filterKeyReducer,
        cart: cartReducer,
        shop: shopReducer,
    }
})

