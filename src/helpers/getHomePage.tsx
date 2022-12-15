
export default function(): string {
    if (localStorage.homeBeerCategory) {
    return `/shop/${JSON.parse(localStorage.homeBeerCategory)}/shop_page=1`
    }
    return ('/')
}