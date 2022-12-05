import { ICartBeerItemValue } from '../constants/interfaces';

export default function ():number {
    let summary = 0;
    if (localStorage.cartItemsList) {
        let items: ICartBeerItemValue[] =JSON.parse(localStorage.cartItemsList)
        summary = items.length;
    }
    return summary;
}

