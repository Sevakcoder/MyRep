import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';

export default function (item: ICartBeerItemValue) {
    let cartItems: ICartBeerItemValue[] = JSON.parse(localStorage.cartItemsList)
    let decreasedItemIndex = getIndexById(item.id, cartItems)
    if (Number(cartItems[Number(decreasedItemIndex)].quantity) !== 1) {
        cartItems[Number(decreasedItemIndex)].quantity = Number(cartItems[Number(decreasedItemIndex)].quantity) - 1;
        localStorage.setItem('cartItemsList', JSON.stringify([...cartItems]))
    }
}