export const filterReducer = (state = {}, action: any) => {
    if (action.type === "edit-filter") {
        return {
            ...state,
            brewedAfterValue: action.brewedAfterValue,
            brewedBeforeValue: action.brewedBeforeValue,
            searchValue: action.searchValue,
        }
    }
    return state;
}

export const defaultFilterValue = {
    type: "edit-filter",
    brewedAfterValue: '12-2006',
    brewedBeforeValue: '01-2018',
    searchValue: '',
}

export const selectFilter = (state: any) => {
    return {
        brewedAfterValue: state.filter.brewedAfterValue,
        brewedBeforeValue: state.filter.brewedBeforeValue,
        searchValue: state.filter.searchValue
    }
}
export const editFilter = (newValue: any) => {
    return {
        type: "edit-filter",
        brewedAfterValue: newValue.brewedAfterValue,
        brewedBeforeValue: newValue.brewedBeforeValue,
        searchValue: newValue.searchValue,
    }
}