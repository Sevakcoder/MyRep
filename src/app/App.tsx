import React from 'react'
import './../styles/App.css';
import './../styles/nav-top.css';
import './../styles/nav-middle.css';
import './../styles/nav-bottom.css';
import './../styles/bottom-bar.css';
import './../styles/filter.css';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Shop from "../containers/shop/Shop";
import Cart from "../containers/cart/Cart";
import SingleBeer from "../containers/singlebeer/SingleBeer";
import Home from '../containers/home/Home';
import ConnectionError from '../containers/conectionError/ConnectionError';
import Error from '../containers/error/Error';
import { BrowserRouter as Router ,Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import getCartItemsSummary from '../helpers/getCartItemsSummary';
import beerType from '../constants/beerType';

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
