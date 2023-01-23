import getCartItemsList from "../../helpers/getCartItemsList";
import { ICartBeerItemValue } from "../../data-structures/interfaces";

export const cartReducer = (state = {}, action: any) => {
    if (action.type === "edit-cart") {
        return {
            ...state,
            cartItemsList: action.cartItemsList
        }
    }
    return state;
}

export const defaultCart = {
    type: "edit-cart",
    cartItemsList: getCartItemsList(),
}

export const selectCart = (state: any) => {
    return state.cart.cartItemsList
}

export const editCart = (newValue: ICartBeerItemValue[]) => {
    return {
        type: "edit-cart",
        cartItemsList: newValue,
    }
}