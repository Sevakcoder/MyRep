export default function(): void {
    const showFilterStyle: any = document.getElementById("show-filter");
    showFilterStyle.style.display = "none";
    const hideFilterStyle: any = document.getElementById("hide-filter");
    hideFilterStyle.style.display = "flex";
    const filterStyle: any = document.getElementById("filter");
    filterStyle.style.display = "flex";
}