import { ICartBeerItemValue } from '../data-structures/interfaces';

export default function (): number {
    let numberOfProductsInCart = 0;
    if (localStorage.cartItemsList) {
        let items: ICartBeerItemValue[] = JSON.parse(localStorage.cartItemsList)
        numberOfProductsInCart = items.length;
    }
    return numberOfProductsInCart;
}

