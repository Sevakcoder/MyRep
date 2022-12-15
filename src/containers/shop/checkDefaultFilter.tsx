import defaultFilter from "../../components/files/defaultFilter";
import { IFilterValue } from '../../data-structures/interfaces';

export default function(): IFilterValue {
    if (localStorage.selectedPageFilter) {
       return JSON.parse(localStorage.selectedPageFilter)
    }
    return defaultFilter
}