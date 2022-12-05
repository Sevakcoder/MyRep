import React from 'react'
import '../../styles/display.css'
import '../../styles/filter.css'
import { useState, useEffect, useRef, useContext } from "react";
import getItemsByUrl from '../../helpers/getItemsByUrl';
import DisplayShop from './DisplayShop';
import DisplayPagination from "./DisplayPagination";
import CreateFilter from './CreateFilter'
import { useNavigate, useParams } from 'react-router-dom';
import checkPageUrlExists from './checkPageUrlExists';
import checkDefaultFilter from './checkDefaultFilter'
import { IFilterValue, IBeerItemValue } from '../../constants/interfaces'
import { filterKeyContext } from '../../app/App';

interface IComponentValue {
    beerType: {
        path: string,
        page: number,
        currantPage: number,
    },
    displayFilterButton: Function,
    filterStyle: string
}

const Shop = ({beerType,displayFilterButton,filterStyle}: IComponentValue) => {

    const pageURL = useNavigate()
    const currantPageParams = useParams()
    const [currantPage,setCurrantPage] = useState(Number)
    useEffect(() => {
        setCurrantPage(Number(currantPageParams.selectedPage))
    },[currantPageParams]);
   
    const filterKey = useContext(filterKeyContext)
    const [defaultFilter,setDefaultFilter] = useState(checkDefaultFilter());
    
    useEffect(() => {
        debugger;
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
        pageURL(`${beerType.path}/page=${1}`);

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

    const ItemsListType: IBeerItemValue[] = []

    const [itemsList, setItemsList] = useState(ItemsListType);
    const url = `https://api.punkapi.com/v2/beers?&page=${beerType.page}&per_page=60${brewedAfter}${brewedBefore}`;
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
        localStorage.setItem('homeBeerType',JSON.stringify(beerType))
    },[beerType])

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
        pageURL(`${beerType.path}/page=${pageNumber}`)
    }
    
    
    checkPageUrlExists(currantPageParams);
    
    return (    
        <>   
            <CreateFilter filterRef={filterRef} handleFilter={handleFilter} defaultFilter={defaultFilter} filterStyle={filterStyle}/> 
            <div id="display">
                <DisplayShop filterRef={filterRef} perPageItemsList={perPageItemsList} />
                <div id="pagination-bar">
                    <div id="pagination-display-bar">
                        <DisplayPagination 
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

export default Shop
