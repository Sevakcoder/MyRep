import getCartItemsList from "../../helpers/getCartItemsList";
import { ICartBeerItemValue } from "../../data-structures/interfaces";
import { createSlice } from "@reduxjs/toolkit";

// export const cartReducer = (state = {}, action: any) => {
//     if (action.type === "edit-cart") {
//         return {
//             ...state,
//             cartItemsList: action.cartItemsList
//         }
//     }
//     return state;
// }

// export const defaultCart = {
//     type: "edit-cart",
//     cartItemsList: getCartItemsList(),
// }

// export const selectCart = (state: any) => {
//     return state.cart.cartItemsList
// }

// export const editCart = (newValue: ICartBeerItemValue[]) => {
//     return {
//         type: "edit-cart",
//         cartItemsList: newValue,
//     }
// }


export const defaultCart = {
    cartItemsList: getCartItemsList(),
    // status: 'idle',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCart,
    reducers: {
        editCart: (state, action) => {
            state.cartItemsList = action.payload
        }
    }
})

export const {editCart} = cartSlice.actions;

export const selectCart = (state: any) => state.cart.cartItemsList;

export default cartSlice.reducer;
