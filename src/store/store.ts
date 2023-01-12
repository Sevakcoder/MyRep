import { combineReducers, createStore } from "redux";
import { filterReducer, defaultFilterValue,  } from "./features/filterSlice";
import { filterKeyReducer, defaultFilterKey } from "./features/filterKeySlice";

export const store = createStore(combineReducers({
    filter: filterReducer,
    filterKey: filterKeyReducer,
}), {
    filter: defaultFilterValue,
    filterKey: defaultFilterKey,
})