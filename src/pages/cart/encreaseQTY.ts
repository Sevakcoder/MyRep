import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { editCart } from '../../store/features/cartSlice';

export default function (item: ICartBeerItemValue, dispatch: any, cartItems: ICartBeerItemValue[] ) {
    let encreasedItemIndex = getIndexById(item.id, cartItems)
    const updatedCartItems = JSON.parse(JSON.stringify(cartItems))
    updatedCartItems[Number(encreasedItemIndex)].quantity = Number(updatedCartItems[Number(encreasedItemIndex)].quantity) + 1;
    localStorage.setItem('cartItemsList', JSON.stringify(updatedCartItems))
    dispatch(editCart(updatedCartItems))
}