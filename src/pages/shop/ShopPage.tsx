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
import { IBeerItemValue } from '../../data-structures/interfaces'
import { useDispatch, useSelector } from 'react-redux';
import { editFilter,selectFilter } from '../../store/features/filterSlice';
import { getShopItemsListAsync, selectShopItems } from '../../store/features/shopSlice';

interface IShopPageProps {
    displayFilterButton: Function,
    filterStyle: string
}

const ShopPage = ({ displayFilterButton, filterStyle }: IShopPageProps) => {

    const navigate = useNavigate()
    const currantPageParams = useParams()
    const [currantPage, setCurrantPage] = useState(Number)
    useEffect(() => {
        setCurrantPage(Number(currantPageParams.selectedPage))
    }, [currantPageParams]);
    
    const filterValue = useSelector(selectFilter)
    const brewedAfterValue = `&brewed_after=${filterValue.brewedAfterValue}`;
    const brewedBeforeValue = `&brewed_before=${filterValue.brewedBeforeValue}`;
    const searchValue = filterValue.searchValue;
    const dispatch = useDispatch();
    // const usAppDisp = useApp


    const handleFilter = (brewedAfter: string, brewedBefore: string, search: string): void => {
        dispatch(editFilter({
            brewedAfterValue: brewedAfter,
            brewedBeforeValue: brewedBefore,
            searchValue: search,
        }))
        setCurrantPage(1);
        navigate(`/shop/${currantPageParams.beerCategory}/shop_page=${1}`);
    }
    useEffect(() => {
        displayFilterButton();
    }, [])

    const brewedAfterRef = useRef();
    const brewedBeforeRef = useRef();
    const searchRef = useRef();
    const filterRef = {
        brewedAfterRef: brewedAfterRef,
        brewedBeforeRef: brewedBeforeRef,
        searchRef: searchRef,
    }

    // const list: IBeerItemValue[] = []
    // const [itemsList, setItemsList] = useState(list);

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
    const url = `https://api.punkapi.com/v2/beers?${beerPage}&per_page=60${brewedAfterValue}${brewedBeforeValue}`;
    // useEffect(() => {
    //     try {
    //         getItemsByUrl(url).then(x => {
    //             setItemsList(x)
    //         })

    //     } catch (error) {
    //         navigate('/Connection_Error')
    //         return
    //     }
    // }, [url])

    const itemsList = useSelector(selectShopItems)
    useEffect(() => {
        try {
            dispatch(getShopItemsListAsync(url)as any)
            // dispatch(getShopItemsListAsync(url))


        } catch (error) {
            navigate('/Connection_Error')
            return
        }
    }, [url])



    useEffect(() => {
        localStorage.setItem('homeBeerCategory', JSON.stringify(currantPageParams.beerCategory))
    }, [currantPageParams])

    const filteredBySearchItemsList = itemsList.filter((item: IBeerItemValue) => {
        return item.name.toLowerCase().includes(searchValue)
    })
    const itemsAmountPerPage = 15;
    const pagesAmount = Math.ceil(filteredBySearchItemsList.length / itemsAmountPerPage);
    const start = (currantPage - 1) * itemsAmountPerPage;
    const end = start + itemsAmountPerPage;
    const perPageItemsList = filteredBySearchItemsList.slice(start, end)

    const selectPage = (pageNumber: number) => {
        setCurrantPage(pageNumber)
        navigate(`/shop/${currantPageParams.beerCategory}/shop_page=${pageNumber}`)
    }


    checkPageUrlExists(currantPageParams);

    const selectedPage: any = currantPageParams.selectedPage;
    if (beerPage === "") {
        return <Navigate to={'/'} />
    }

    if (!['1', '2', '3', '4'].includes(selectedPage)) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <Filter filterRef={filterRef} handleFilter={handleFilter} filterStyle={filterStyle} />
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
