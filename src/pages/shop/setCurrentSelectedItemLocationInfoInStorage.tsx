
const setCurrentSelectedItemLocationInfoInStorage = (itemId: number, posY: number, selectedPageURL: string): void => {

    localStorage.setItem("selectedItemId", itemId.toString())
    localStorage.setItem("selectedItemPosY", posY.toString())
    localStorage.setItem("selectedPageURL", JSON.stringify(selectedPageURL))
}

export default setCurrentSelectedItemLocationInfoInStorage;