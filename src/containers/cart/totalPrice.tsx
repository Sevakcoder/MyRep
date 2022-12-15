import { ICartBeerItemValue } from '../../data-structures/interfaces';

export default function(cartItems: ICartBeerItemValue[]) {
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.quantity)*Number(item.srm)
    });
    return total;
}
