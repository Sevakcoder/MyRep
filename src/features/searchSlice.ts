export const searchReducer = (state = {}, action: any) => {
    if (action.type === 'edit-search') {
        return {
            ...state,
            searchValue: action.searchValue
        }
    }
    return state
}

export const defaultSearchValue = {
    type: 'edit-search',
    searchValue: '',
}


export const selectSearch = (state: any) => {
    return state.filterSearch.searchValue
}

export const editSearch = (newValue: any) => {
    return {
        type: 'edit-search',
        searchValue: newValue
    }
}