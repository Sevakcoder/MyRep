import defaultFilter  from "../../constants/defaultFilter";
import { IFilterValue } from '../../constants/interfaces';

export default function(): IFilterValue {
    if (localStorage.selectedPageFilter) {
       return JSON.parse(localStorage.selectedPageFilter)
    }
    return defaultFilter
}