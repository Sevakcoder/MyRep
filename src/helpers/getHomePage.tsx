import { useNavigate } from "react-router-dom";

export default function(): string {
    if (localStorage.homeBeerType) {
    return `${JSON.parse(localStorage.homeBeerType).path}/page=1`
    }
    return ('/')
}