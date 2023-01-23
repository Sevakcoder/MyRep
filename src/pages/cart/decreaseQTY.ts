import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { editCart } from '../../store/features/cartSlice';

export default function (item: ICartBeerItemValue, dispatch: any, cartItems: ICartBeerItemValue[] ) {
    let decreasedItemIndex = getIndexById(item.id, cartItems)
    if (Number(cartItems[Number(decreasedItemIndex)].quantity) !== 1) {
        cartItems[Number(decreasedItemIndex)].quantity = Number(cartItems[Number(decreasedItemIndex)].quantity) - 1;
        localStorage.setItem('cartItemsList', JSON.stringify([...cartItems]))
        dispatch(editCart([...cartItems]))
    }
}