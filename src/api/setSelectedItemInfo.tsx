import { IFilterValue } from '../constants/interfaces';

const setSelectedItemInfo = (itemId: number,posY: number,selectedPageFilter:IFilterValue,selectedPageURL:string): void => {
    
    localStorage.setItem("selectedItemId",itemId.toString())
    localStorage.setItem("selectedItemPosY",posY.toString())
    localStorage.setItem("selectedPageFilter",JSON.stringify(selectedPageFilter))
    localStorage.setItem("selectedPageURL",JSON.stringify(selectedPageURL))
}

export default setSelectedItemInfo;