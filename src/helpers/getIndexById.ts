import { IBeerItemValue } from '../data-structures/interfaces';

export default function (itemId: number, itemList: IBeerItemValue[]): string {
    let itemIndex = "";
    for (var index in itemList) {
        if (itemList[index].id === itemId) {
            itemIndex = index;
            break
        }
    }
    return itemIndex
}

