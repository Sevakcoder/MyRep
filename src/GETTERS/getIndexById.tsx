import { ItemType } from "../OBJECTS/interfaces";

export default function(itemId: number,itemList:ItemType[]): string {
    let itemIndex = "";    
    for (var index in itemList) {
        if (itemList[index].id === itemId) {
            itemIndex = index;
            break
        }
    }
    return itemIndex
}

