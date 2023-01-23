import getIndexById from '../../helpers/getIndexById';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { editCart } from '../../store/features/cartSlice';

export default function (item: ICartBeerItemValue, dispatch: any, cartItems: ICartBeerItemValue[]) {
    let removeConfirmText = `Are you sure that you want to REMOVE this item from your Cart?
    \nTo remove: Press "Ok"\nTo cancel: Press "Cancel"`

    if (window.confirm(removeConfirmText)) {
        let removedItemIndex = getIndexById(item.id, cartItems)
        cartItems.splice(Number(removedItemIndex), 1);
        localStorage.setItem('cartItemsList', JSON.stringify(cartItems))
        dispatch(editCart([...cartItems]))
    }
}