import { type } from "@testing-library/user-event/dist/type";
import { ICartBeerItemValue } from '../../constants/interfaces';

export default function (itemId: number,itemsList: ICartBeerItemValue[]) {
    let exist = false;
    let existingItem: Partial<ICartBeerItemValue> = {};
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
