import cleanGoBackStorage from "../../helpers/cleanSelectedItemInfo";

export default function (currantPageParams: any): void {
    const currantPageURL = Object.values(currantPageParams)[0]
    if (localStorage.selectedPageURL) {
        const selectedPageURL = JSON.parse(localStorage.selectedPageURL)
        if (currantPageURL !== selectedPageURL) {
            cleanGoBackStorage();
        }
    }
}

