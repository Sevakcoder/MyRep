import { ICartBeerItemValue } from '../data-structures/interfaces';

export default function (): ICartBeerItemValue[] {
    let cartItemsList = [];
    if (localStorage.cartItemsList) {
        cartItemsList = JSON.parse(localStorage.cartItemsList)
    }
    return cartItemsList;
}

