import { type } from "@testing-library/user-event/dist/type";
import { CartItemType } from "../OBJECTS/interfaces";

export default function (itemId: number,itemsList: CartItemType[]) {
    let exist = false;
    let existingItem: Partial<CartItemType> = {};
    for (const item of itemsList) {
        if (item.id === itemId) {
            exist = true;
            existingItem = {...item}
            break;
        }
    }
    return {
        exist: exist, 
        item: existingItem
    };
}
