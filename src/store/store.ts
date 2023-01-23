import { combineReducers, createStore } from "redux";
import { filterReducer, defaultFilterValue,  } from "./features/filterSlice";
import { filterKeyReducer, defaultFilterKey } from "./features/filterKeySlice";
import { cartReducer, defaultCart } from "./features/cartSlice";

export const store = createStore(combineReducers({
    filter: filterReducer,
    filterKey: filterKeyReducer,
    cart: cartReducer,
}), {
    filter: defaultFilterValue,
    filterKey: defaultFilterKey,
    cart: defaultCart,
})