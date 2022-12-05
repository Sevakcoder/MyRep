import { ICartBeerItemValue } from '../../constants/interfaces';

export default function(cartItems: ICartBeerItemValue[]) {
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.quantity)*Number(item.srm)
    });
    return total;
}
