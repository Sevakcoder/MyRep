import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBeerItemValue } from "../../data-structures/interfaces";

export const getShopItemsListAsync = createAsyncThunk(
    'shop/fetchItems',
    async (url: string) => {
        let object = await fetch(url);
        let text = await object.text();
        let listItems: IBeerItemValue[] = await JSON.parse(text);
        
        return listItems
    }
)

const defaultShopItemsList: {shopItemsList: IBeerItemValue[]} = {
    shopItemsList: [],
};

export const shopSlice = createSlice({
    name: 'shop',
    initialState: defaultShopItemsList,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getShopItemsListAsync.fulfilled, (state,action) => {
            state.shopItemsList = action.payload
        })
    },
    
})

export const selectShopItems = (state: any) => state.shop.shopItemsList;

export default shopSlice.reducer;