import { createSlice } from "@reduxjs/toolkit";

// export const filterReducer = (state = {}, action: any) => {
//     if (action.type === "edit-filter") {
//         return {
//             ...state,
//             brewedAfterValue: action.brewedAfterValue,
//             brewedBeforeValue: action.brewedBeforeValue,
//             searchValue: action.searchValue,
//         }
//     }
//     return state;
// }

// export const defaultFilterValue = {
//     type: "edit-filter",
//     brewedAfterValue: '12-2006',
//     brewedBeforeValue: '01-2018',
//     searchValue: '',
// }

// export const selectFilter = (state: any) => {
//     return {
//         brewedAfterValue: state.filter.brewedAfterValue,
//         brewedBeforeValue: state.filter.brewedBeforeValue,
//         searchValue: state.filter.searchValue
//     }
// }
// export const editFilter = (newValue: any) => {
//     return {
//         type: "edit-filter",
//         brewedAfterValue: newValue.brewedAfterValue,
//         brewedBeforeValue: newValue.brewedBeforeValue,
//         searchValue: newValue.searchValue,
//     }
// }

export const defaultFilter = {
    filterValue: {
        brewedAfterValue: '12-2006',
        brewedBeforeValue: '01-2018',
        searchValue: '',
    },
    // status: 'idle',
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState: defaultFilter,
    reducers: {
        editFilter: (state, action) => {
            state.filterValue = action.payload
        }
    },
    
})

export const editFilter = filterSlice.actions.editFilter;

export const selectFilter = (state: any) => state.filter.filterValue;

export default filterSlice.reducer;