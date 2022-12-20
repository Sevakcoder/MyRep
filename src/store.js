import { combineReducers, createStore } from "redux";
import { brewedAfterReducer,defaultBrewedAfterValue } from "./features/brewedAfterSlice";
import { brewedBeforeReducer,defaultbrewedBeforeValue } from "./features/brewedBeforeSlice";
import { searchReducer,defaultSearchValue } from "./features/searchSlice";
import { filterKeyReducer,defaultFilterKey } from "./features/filterKeySlice";

export const store = createStore(combineReducers({
    filterBrewedAfter: brewedAfterReducer,
    filterBrewedBefore: brewedBeforeReducer,
    filterSearch: searchReducer,
    filterKey: filterKeyReducer,
}),{
    filterBrewedAfter: defaultBrewedAfterValue,
    filterBrewedBefore: defaultbrewedBeforeValue,
    filterSearch: defaultSearchValue,
    filterKey: defaultFilterKey,
})