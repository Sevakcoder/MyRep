import getIndexById from './getIndexById';
import checkItemExist from '../pages/cart/checkItemExist';
import { ICartBeerItemValue } from '../data-structures/interfaces';
import { editCart } from '../store/features/cartSlice';

export default function (selectedItem: ICartBeerItemValue, dispatch: any, cartItems: any) {
    if (cartItems.length > 0) {
        let itemExistInfo = checkItemExist(selectedItem.id, cartItems)
        if (!itemExistInfo.exist) {
            const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
            updatedCartItems.unshift(selectedItem);
            localStorage.setItem("cartItemsList", JSON.stringify(updatedCartItems))
            alert("The item has been successfully added to your Cart!");
            dispatch(editCart(updatedCartItems))
        } else {
            let confirmText = `Your cart already contains this item with an amount of ${itemExistInfo.item.quantity}!\n
                    Do you still want to add it ?
            \nTo continue adding: Press "Ok"\nTo cancel adding: Press "Cancel"`;
            if (window.confirm(confirmText)) {
                let itemIndexInCartItemsList = getIndexById(selectedItem.id, cartItems)
                const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
                updatedCartItems[Number(itemIndexInCartItemsList)].quantity = Number(updatedCartItems[Number(itemIndexInCartItemsList)].quantity)
                    + Number(selectedItem.quantity);
                let alertText = `The item has been successfully added to your Cart!\nNow the total amount of this item in your Cart is ${updatedCartItems[itemIndexInCartItemsList].quantity}`;
                localStorage.setItem("cartItemsList", JSON.stringify(updatedCartItems))
                alert(alertText);
                dispatch(editCart(updatedCartItems))
            }
        }
    } else {
        localStorage.setItem("cartItemsList", JSON.stringify([selectedItem]));
        alert("The item has been successfully added to your Cart!");
        const updatedCartItems = JSON.parse(JSON.stringify(cartItems))

        updatedCartItems.unshift(selectedItem);
        dispatch(editCart(updatedCartItems))
    }
}
