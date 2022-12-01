import { FilterType } from "../OBJECTS/interfaces"

const setSelectedItemInfo = (itemId: number,posY: number,selectedPageFilter:FilterType,selectedPageURL:string): void => {
    
    localStorage.setItem("selectedItemId",itemId.toString())
    localStorage.setItem("selectedItemPosY",posY.toString())
    localStorage.setItem("selectedPageFilter",JSON.stringify(selectedPageFilter))
    localStorage.setItem("selectedPageURL",JSON.stringify(selectedPageURL))
}

export default setSelectedItemInfo;