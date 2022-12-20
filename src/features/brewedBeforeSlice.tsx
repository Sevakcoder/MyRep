export const brewedBeforeReducer = (state={},action: any) => {
    if (action.type === 'edit-brewed-before') {
        return {
            ...state,
            brewedBeforeValue: action.brewedBeforeValue
        }
    }
    return state
} 

export const defaultbrewedBeforeValue = {
    type: 'edit-brewed-before',
    brewedBeforeValue: '01-2018',
}

export const selectBrewedBefore = (state: any) => {
    return state.filterBrewedBefore.brewedBeforeValue
}

export const editBrewedBefore = (newValue: any) => {
    return {
        type: 'edit-brewed-before',
        brewedBeforeValue: newValue
    }
}