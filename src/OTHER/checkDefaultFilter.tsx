import defaultFilter  from "../OBJECTS/defaultFilter";
import { FilterType } from "../OBJECTS/interfaces";

export default function(): FilterType {
    if (localStorage.selectedPageFilter) {
       return JSON.parse(localStorage.selectedPageFilter)
    }
    return defaultFilter
}