import { createSlice } from "@reduxjs/toolkit";

// export const filterKeyReducer = (state = {}, action: any) => {
//     if (action.type === 'edit-filter-key') {
//         return {
//             ...state,
//             key: action.key
//         }
//     }
//     return state;
// }


// export const defaultFilterKey = {
//     filterKeyValue: Math.random(),
//     status: 'idle'
// }

// export const selectFilterKey = (state: any) => {
//     return state.filterKey.key
// }

// export const editFilterKey = () => {
//     return {
//         type: 'edit-filter-key',
//         key: Math.random(),
//     }
// }

export const defaultFilterKey = {
    filterKeyValue: Math.random(),
    // status: 'idle'
}
export const filterKeySlice = createSlice({
    name: 'filterKey',
    initialState: defaultFilterKey,
    reducers: {
        refreshFilter: (state) => {
            state.filterKeyValue = Math.random();
        }
    }
})

export const refreshFilter = filterKeySlice.actions.refreshFilter;

export const selectFilterKey = (state: any) => state.filterKey.filterKeyValue;

export default filterKeySlice.reducer;