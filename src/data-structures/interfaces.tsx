import { type } from "@testing-library/user-event/dist/type"

interface IFilterValue {
    brewedAfter: string,
    brewedBefore: string,
    searchValue: string
}

interface IFilterOptionValue {
    name: string,
    value: string,
}

interface IBeerItemValue {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number | null,
    ibu: number | null,
    srm: number ,
    volume: {
        value: number | null,
        unit: string
    },
}


interface ICartBeerItemValue extends IBeerItemValue {
    quantity:number
} 

export type { IFilterValue,IFilterOptionValue,IBeerItemValue,ICartBeerItemValue};