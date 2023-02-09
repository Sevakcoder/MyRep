import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { editCart } from '../../store/features/cartSlice';

export default function (item: ICartBeerItemValue, dispatch: any, cartItems: ICartBeerItemValue[] ) {
    let decreasedItemIndex = getIndexById(item.id, cartItems)
    if (Number(cartItems[Number(decreasedItemIndex)].quantity) !== 1) {
        const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
        updatedCartItems[Number(decreasedItemIndex)].quantity = Number(updatedCartItems[Number(decreasedItemIndex)].quantity) - 1;
        localStorage.setItem('cartItemsList', JSON.stringify([...updatedCartItems]))
        dispatch(editCart(updatedCartItems))
    }
}