import React from 'react'
import '../styles/nav-top.css';
import '../styles/nav-middle.css';
import '../styles/nav-bottom.css';
import '../styles/bottom-bar.css';
import { Link, useNavigate } from "react-router-dom";
import cleanGoBackStorage from '../helpers/cleanGoBackStorage';
import beerType from './files/beerType';
import getHomePage from '../helpers/getHomePage';
import { useDispatch } from 'react-redux';
import { editFilterKey } from '../features/filterKeySlice';
import { editBrewedAfter } from '../features/brewedAfterSlice';
import { editBrewedBefore } from '../features/brewedBeforeSlice';
import { editSearch } from '../features/searchSlice';
import defaultFilter from './files/defaultFilter';

interface IComponentValue {
    filterUpdate: Function,
    filterButtonStyle: string,
    hideFilter: Function,
    showFilter: Function,
    displayFilterStyle: string,
    hideFilterStyle: string
}

const Nav = ({filterUpdate,filterButtonStyle,hideFilter,showFilter,displayFilterStyle,hideFilterStyle}: IComponentValue) => {
    
    const goHome = useNavigate();
    const pagePath = useNavigate();
    const dispatch = useDispatch();
    const reset = () => {
        cleanGoBackStorage();
        localStorage.removeItem('homeBeerCategory');
        pagePath('/')
    }
    const selectHome = () => {
        dispatch(editFilterKey())
        cleanGoBackStorage();
        // filterUpdate();
        dispatch(editFilterKey())
        dispatch(editBrewedAfter(defaultFilter.brewedAfter))
        dispatch(editBrewedBefore(defaultFilter.brewedBefore))
        dispatch(editSearch(defaultFilter.searchValue))
        goHome(getHomePage())
    }
    return (
        <>
        <div id="nav-bar">
            <div className="nav-middle">
                <div className="nav-middle-menu">
                    <div className="nav-logo" title='Reset' onClick={reset}><span>Beer<span>Shop</span></span></div>
            
                    <div className="nav-menu">
                        <ul>
                            <li onClick={() => {
                                selectHome();
                            }}>HOME</li>
                            <li id="li-shop"><a href="#">SHOP</a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><Link to={`/shop/${beerType[0].type}/shop_page=${beerType[0].currantPage}`}>Filtered Beer</Link></li>
                                        <li><Link to={`/shop/${beerType[1].type}/shop_page=${beerType[1].currantPage}`}>Non Filtered Beer</Link></li>
                                        <li><Link to={`/shop/${beerType[2].type}/shop_page=${beerType[2].currantPage}`}>Alcohol Beer</Link></li>
                                        <li><Link to={`/shop/${beerType[3].type}/shop_page=${beerType[3].currantPage}`}>Non Alcohol Beer</Link></li>
                                      </ul>
                                </div>
                            </li>    
                            <li><Link to={`/`}>OUR BEER</Link></li>
                            <li onClick={() => {

                            }}><a href="#">OUR STORY</a></li>
                            <li ><a href="#">CONTACT</a></li>
                        </ul>
        
                    </div>
                </div>
                <div id="nav-welcome">
                    <p id="welcome-dir">A very warm welcome to our</p>
                    <p id="location-dir">BEER SHOP</p>
                </div>

            </div>
        </div>
        <div className="nav-bottom">
            <div id="item-bar">
                <ul>
                    <li><a href="">ALL</a></li>
                    <li><a href="">LATEST</a></li>
                    <li><a href="">FEATURED</a></li>
                    <li><a href="">SALE</a></li>
                </ul>
            </div>
            <div id="filter-bar" style={{display: filterButtonStyle}}>
                <p id="show-filter" style={{display:displayFilterStyle}}><span onClick={() => {
                    showFilter();
                }}>FILTER OPTIONS<i className="fa fa-filter"></i></span></p>
                <p id="hide-filter" style={{display:hideFilterStyle}}><span onClick={() => {
                    hideFilter();
                }}>HIDE FILTER<i className="fa fa-close"></i></span></p>
            </div>
        </div>
        </>
    )
}
export default Nav;