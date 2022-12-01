import { CartItemType } from "../OBJECTS/interfaces";

export default function ():number {
    let summary = 0;
    if (localStorage.cartItemsList) {
        let items: CartItemType[] =JSON.parse(localStorage.cartItemsList)
        summary = items.length;
    }
    return summary;
}

