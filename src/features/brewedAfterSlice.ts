export const brewedAfterReducer = (state = {}, action: any) => {
    if (action.type === "edit-brewed-after") {
        return {
            ...state,
            brewedAfterValue: action.brewedAfterValue
        }
    }
    return state;
}

export const defaultBrewedAfterValue = {
    type: "edit-brewed-after",
    brewedAfterValue: '12-2006',
}

export const selectBrewedAfter = (state: any) => {
    return state.filterBrewedAfter.brewedAfterValue
}
export const editBrewedAfter = (newValue: string) => {
    return {
        type: "edit-brewed-after",
        brewedAfterValue: newValue,
    }
}