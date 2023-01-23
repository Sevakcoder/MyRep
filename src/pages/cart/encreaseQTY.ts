import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { editCart } from '../../store/features/cartSlice';

export default function (item: ICartBeerItemValue, dispatch: any, cartItems: ICartBeerItemValue[] ) {
    let encreasedItemIndex = getIndexById(item.id, cartItems)
    cartItems[Number(encreasedItemIndex)].quantity = Number(cartItems[Number(encreasedItemIndex)].quantity) + 1;
    localStorage.setItem('cartItemsList', JSON.stringify([...cartItems]))
    dispatch(editCart([...cartItems]))
}