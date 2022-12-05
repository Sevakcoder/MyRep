import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../constants/interfaces';

export default function(item: ICartBeerItemValue) {
    let cartItems: ICartBeerItemValue[] = JSON.parse(localStorage.cartItemsList)
    let encreasedItemIndex = getIndexById(item.id,cartItems)
    cartItems[Number(encreasedItemIndex)].quantity = Number(cartItems[Number(encreasedItemIndex)].quantity) + 1;
    localStorage.setItem('cartItemsList',JSON.stringify([...cartItems]))

}