import React from 'react'
import './styles/App.css';
import './styles/nav-top.css';
import './styles/nav-middle.css';
import './styles/nav-bottom.css';
import './styles/bottom-bar.css';
import './styles/filter.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ShopPage from "./containers/shop/ShopPage";
import CartPage from "./containers/cart/CartPage";
import SingleBeerPage from "./containers/singlebeer/SingleBeerPage";
import HomePage from './containers/home/HomePage';
import ConnectionErrorPage from './containers/conectionError/ConnectionErrorPage';
import ErrorPage from './containers/error/ErrorPage';
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import getNumberOfProuductsInCart from './helpers/getNumberOfProuductsInCart';

export const filterKeyContext= createContext(Math.random())

function App() {
  
  const [filterKey,setFilterKey] = useState(Math.random())
  const filterUpdate = (): void => {
    setFilterKey(Math.random())
  }
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(getNumberOfProuductsInCart())
  const handleCartSummary = (numberOfProducts:number): void => {
    setNumberOfProductsInCart(numberOfProducts)
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
  const showFilter = (): void => {
    setFilterStyle('flex');
    setDisplayFilterStyle('none');
    setHideFilterStyle('flex');
  }

  return (
    <>
    <Header numberOfProductsInCart={numberOfProductsInCart} />
    <Nav filterUpdate={filterUpdate} filterButtonStyle={filterButtonStyle} hideFilter={hideFilter} showFilter={showFilter} displayFilterStyle={displayFilterStyle} hideFilterStyle={hideFilterStyle} />
    <Routes>
        <Route path={`/shop/:beerCategory/shop_page=:selectedPage`} element={<filterKeyContext.Provider value={filterKey} > <ShopPage  displayFilterButton={displayFilterButton} filterStyle={filterStyle} /></filterKeyContext.Provider>} />
        <Route path={`/shop/:beerCategory/single_beer/id=:itemId`} element={<SingleBeerPage handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path='/cart' element={<CartPage handleCartSummary={handleCartSummary} hideFilterButton={hideFilterButton} />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/Connection_Error' element={<ConnectionErrorPage hideFilterButton={hideFilterButton} />} />
        <Route path='*' element={<ErrorPage hideFilterButton={hideFilterButton} />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
