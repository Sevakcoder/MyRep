import { type } from "@testing-library/user-event/dist/type"

interface FilterType {
    brewedAfter: string,
    brewedBefore: string,
    searchValue: string
}

interface FilterOptionType {
    name: string,
    value: string,
}

interface ItemType {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number | null,
    ibu: number | null,
    target_fg: number | null,
    target_og: number | null,
    ebc: number | null,
    srm: number ,
    ph: number | null,
    attenuation_level: number | null,
    volume: {
        value: number | null,
        unit: string
    },
    boil_volume: {
        value: number | null,
        unit: string
    },
    method: {
        mash_temp: [
        {
            temp: {
            value: number | null,
            unit: string
            },
            duration: number | null
        }
        ],
        fermentation: {
        temp: {
            value: number | null,
            unit: string
        }
        },
        twist: null
    },
    ingredients: {
        malt: [
        {
            name: string,
            amount: {
            value: number | null,
            unit: string
            }
        }
        ],
        hops: [
        {
            name: string,
            amount: {
            value: number | null,
            unit: string
            },
            add: string,
            attribute: string
            },
            {
            name: string,
            amount: {
                value: number | null,
                unit: string
            },
            add: string,
            attribute: string
            },
        
        ],
        yeast: string
    },
    food_pairing: [
        string,
        string,
        string
    ],
    brewers_tips: string,
    contributed_by: string
}

interface CartItemType extends ItemType {
    quantity:number
} 

export type { FilterType,FilterOptionType,ItemType,CartItemType};