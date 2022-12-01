import React from 'react'
import './CSS/App.css';
import './CSS/nav-top.css';
import './CSS/nav-middle.css';
import './CSS/nav-bottom.css';
import './CSS/bottom-bar.css';
import './CSS/filter.css';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Shop from "./PAGES/Shop";
import Cart from "./PAGES/Cart";
import SingleBeer from "./PAGES/SingleBeer";
import Home from './PAGES/Home';
import ConnectionError from './PAGES/ConnectionError';
import Error from './PAGES/Error';
import { BrowserRouter as Router ,Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import getCartItemsSummary from './GETTERS/getCartItemsSummary';
import beerType from './OBJECTS/beerType';

export const filterKeyContext= createContext(Math.random())

function App() {
  
  const [filterKey,setFilterKey] = useState(Math.random())
  const filterUpdate = (): void => {
    setFilterKey(Math.random())
  }
  const [cartSummary, setCartSummary] = useState(getCartItemsSummary())
  const handleCartSummary = (summary:number): void => {
    setCartSummary(summary)
  }
  // const pagePath = useNavigate();
  // const goToCart = () => {
  //   pagePath('/cart')
  // };
  const [filterButtonStyle,setFilterButtonStyle] = useState<string>("none")
  const [displayFilterStyle,setDisplayFilterStyle] = useState('none');
  const [hideFilterStyle,setHideFilterStyle] = useState('flex');
  const [filterStyle,setFilterStyle] = useState('flex');
  const hideFilterButton = (): void => {
    setFilterButtonStyle('none')
  }
  const displayFilterButton = (): void=> {
    setFilterButtonStyle('flex')
  }
  const hideFilter = (): void => {
    setFilterStyle('none');
    setDisplayFilterStyle('flex');
    setHideFilterStyle('none');
  }
  const displayFilter = (): void => {
    setFilterStyle('flex');
    setDisplayFilterStyle('none');
    setHideFilterStyle('flex');
  }

  return (
    <>
    {/* <Router> */}
    <Header cartSummary={cartSummary} />
    <Nav filterUpdate={filterUpdate} filterButtonStyle={filterButtonStyle} hideFilter={hideFilter} displayFilter={displayFilter} displayFilterStyle={displayFilterStyle} hideFilterStyle={hideFilterStyle} />
      <Routes>
        <Route path={`${beerType[0].path}/page=:selectedPage`} element={<filterKeyContext.Provider value={filterKey} > <Shop beerType={{...beerType[0]}} displayFilterButton={displayFilterButton} filterStyle={filterStyle} /></filterKeyContext.Provider>} />
        <Route path={`${beerType[1].path}/page=:selectedPage`} element={<filterKeyContext.Provider value={filterKey} > <Shop beerType={{...beerType[1]}} displayFilterButton={displayFilterButton} filterStyle={filterStyle} /></filterKeyContext.Provider>} />
        <Route path={`${beerType[2].path}/page=:selectedPage`} element={<filterKeyContext.Provider value={filterKey} > <Shop beerType={{...beerType[2]}} displayFilterButton={displayFilterButton} filterStyle={filterStyle} /></filterKeyContext.Provider>} />
        <Route path={`${beerType[3].path}/page=:selectedPage`} element={<filterKeyContext.Provider value={filterKey} > <Shop beerType={{...beerType[3]}} displayFilterButton={displayFilterButton} filterStyle={filterStyle} /></filterKeyContext.Provider>} />
        <Route path={`${beerType[0].path}/single_beer/id=:itemId`} element={<SingleBeer handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path={`${beerType[1].path}/single_beer/id=:itemId`} element={<SingleBeer handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path={`${beerType[2].path}/single_beer/id=:itemId`} element={<SingleBeer handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path={`${beerType[3].path}/single_beer/id=:itemId`} element={<SingleBeer handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path='/cart' element={<Cart handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path='/' element={<Home />} />
        <Route path='/Connection_Error' element={<ConnectionError hideFilterButton={hideFilterButton} />} />
        <Route path='*' element={<Error hideFilterButton={hideFilterButton} />} />
      </Routes>
    <Footer />
    {/* </Router> */}
    </>
  );
}

export default App;
