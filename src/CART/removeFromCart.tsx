import getIndexById from "../GETTERS/getIndexById";
import { CartItemType } from "../OBJECTS/interfaces";

export default function(item: CartItemType) {
    let removeConfirmText = `Are you sure that you want to REMOVE this item from your Cart?
    \nTo remove: Press "Ok"\nTo cancel: Press "Cancel"`

    if (window.confirm(removeConfirmText)) {
        let cartItems: CartItemType[] = JSON.parse(localStorage.cartItemsList)
        let removedItemIndex = getIndexById(item.id,cartItems)
        cartItems.splice(Number(removedItemIndex),1);
        localStorage.setItem('cartItemsList',JSON.stringify(cartItems))
    }

}