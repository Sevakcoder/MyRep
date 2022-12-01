import { CartItemType } from "../OBJECTS/interfaces";

export default function(cartItems: CartItemType[]) {
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.quantity)*Number(item.srm)
    });
    return total;
}
