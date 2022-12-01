import getIndexById from "../GETTERS/getIndexById";
import { CartItemType } from "../OBJECTS/interfaces";

export default function(item: CartItemType) {
    let cartItems: CartItemType[] = JSON.parse(localStorage.cartItemsList)
    let decreasedItemIndex = getIndexById(item.id,cartItems)
    if (Number(cartItems[Number(decreasedItemIndex)].quantity) !== 1) {
        cartItems[Number(decreasedItemIndex)].quantity = Number(cartItems[Number(decreasedItemIndex)].quantity) - 1;
        localStorage.setItem('cartItemsList',JSON.stringify([...cartItems]))
    }
}