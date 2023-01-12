export const filterKeyReducer = (state = {}, action: any) => {
    if (action.type === 'edit-filter-key') {
        return {
            ...state,
            key: action.key
        }
    }
    return state;
}

export const defaultFilterKey = {
    type: 'edit-filter-key',
    key: Math.random(),
}

export const selectFilterKey = (state: any) => {
    return state.filterKey.key
}

export const editFilterKey = () => {
    return {
        type: 'edit-filter-key',
        key: Math.random(),
    }
}