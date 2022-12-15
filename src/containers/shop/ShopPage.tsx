import React from 'react'
import '../../styles/display.css'
import '../../styles/filter.css'
import { useState, useEffect, useRef, useContext } from "react";
import getItemsByUrl from '../../helpers/getItemsByUrl';
import Shop from './Shop';
import Pagination from "./Pagination";
import Filter from './Filter'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import checkPageUrlExists from './checkPageUrlExists';
import checkDefaultFilter from './checkDefaultFilter'
import { IFilterValue, IBeerItemValue } from '../../data-structures/interfaces'
import { filterKeyContext } from '../../App';

interface IComponentValue {
    displayFilterButton: Function,
    filterStyle: string
}

const ShopPage = ({displayFilterButton,filterStyle}: IComponentValue) => {

    const pageURL = useNavigate()
    const currantPageParams = useParams()
    const [currantPage,setCurrantPage] = useState(Number)
    useEffect(() => {
        setCurrantPage(Number(currantPageParams.selectedPage))
    },[currantPageParams]);
   
    const filterKey = useContext(filterKeyContext)
    const [defaultFilter,setDefaultFilter] = useState(checkDefaultFilter());
    
    useEffect(() => {
        setDefaultFilter(checkDefaultFilter())
    },[filterKey])
    const [brewedAfter,setBrewedAfter] = useState(`&brewed_after=${defaultFilter.brewedAfter}`);
    useEffect(() => {
        setBrewedAfter(`&brewed_after=${defaultFilter.brewedAfter}`)
    },[filterKey])
    const [brewedBefore,setBrewedBefore] = useState(`&brewed_before=${defaultFilter.brewedBefore}`);
    useEffect(() => {
        setBrewedBefore(`&brewed_before=${defaultFilter.brewedBefore}`)
    },[filterKey])
    const [searchValue,setSearchValue] = useState(defaultFilter.searchValue)
    useEffect(() => {
        setSearchValue(defaultFilter.searchValue)
    },[filterKey])
    const handleFilter = (brewedAfter: string,brewedBefore: string,searchValue: string): void => {
        setBrewedAfter(`&brewed_after=${brewedAfter}`);
        setBrewedBefore(`&brewed_before=${brewedBefore}`);
        setSearchValue(searchValue.toLowerCase());
        setCurrantPage(1);
        pageURL(`/shop/${currantPageParams.beerCategory}/shop_page=${1}`);

    }
    useEffect(() => {
        displayFilterButton();
    },)
    const brewedAfterRef = useRef();
    const brewedBeforeRef = useRef();
    const searchRef = useRef();
    const filterRef = {
        brewedAfterRef: brewedAfterRef,
        brewedBeforeRef:brewedBeforeRef,
        searchRef:searchRef,
    }

    const list: IBeerItemValue[] = []

    const [itemsList, setItemsList] = useState(list);
    let beerPage = "";
    switch (currantPageParams.beerCategory) {
        case "filtered_beer":
            beerPage = "&page=1";
            break;
        case "non_filtered_beer":
            beerPage = "&page=2";
            break;
        case "alcohol_beer": 
            beerPage = "&page=3";
            break;
        case "non_alcohol_beer":
            beerPage = "&page=4";
            break;
        default:
           break;
    }
    const url = `https://api.punkapi.com/v2/beers?${beerPage}&per_page=60${brewedAfter}${brewedBefore}`;
    useEffect(() => {
        try {
            getItemsByUrl(url).then(x => {
                setItemsList(x)
                })
    
        } catch (error) {
            pageURL('/Connection_Error')
            return
        }
    },[url])

    useEffect(() => {
        localStorage.setItem('homeBeerCategory',JSON.stringify(currantPageParams.beerCategory))
    },[currantPageParams])

    const filteredBySearchItemsList = itemsList.filter((item) => {
        return item.name.toLowerCase().includes(searchValue)
    })
    const itemsAmountPerPage = 15;
    const pagesAmount = Math.ceil(filteredBySearchItemsList.length / itemsAmountPerPage);
    const start = (currantPage-1)*itemsAmountPerPage;
    const end = start + itemsAmountPerPage;
    const perPageItemsList = filteredBySearchItemsList.slice(start,end)
    
    const selectPage = (pageNumber: number) => {
        setCurrantPage(pageNumber)
        pageURL(`/shop/${currantPageParams.beerCategory}/shop_page=${pageNumber}`)
    }
    
    
    checkPageUrlExists(currantPageParams);

    const selectedPage:any = currantPageParams.selectedPage;
    if (beerPage === ""){
        return <Navigate to={'/'} />
    }

    if (!['1','2','3','4'].includes(selectedPage)) {
        return <Navigate to={'/'} />
    }
    return (    
        <>   
            <Filter filterRef={filterRef} handleFilter={handleFilter} defaultFilter={defaultFilter} filterStyle={filterStyle}/> 
            <div id="display">
                <Shop filterRef={filterRef} perPageItemsList={perPageItemsList} />
                <div id="pagination-bar">
                    <div id="pagination-display-bar">
                        <Pagination 
                        pagesAmount={pagesAmount}
                        currantPage={currantPage}
                        selectPage={selectPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage
