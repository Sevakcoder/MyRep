import getIndexById from "../GETTERS/getIndexById";
import { CartItemType } from "../OBJECTS/interfaces";

export default function(item: CartItemType) {
    let cartItems: CartItemType[] = JSON.parse(localStorage.cartItemsList)
    let encreasedItemIndex = getIndexById(item.id,cartItems)
    cartItems[Number(encreasedItemIndex)].quantity = Number(cartItems[Number(encreasedItemIndex)].quantity) + 1;
    localStorage.setItem('cartItemsList',JSON.stringify([...cartItems]))

}