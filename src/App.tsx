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
import ShopPage from "./pages/shop/ShopPage";
import CartPage from "./pages/cart/CartPage";
import SingleBeerPage from "./pages/singlebeer/SingleBeerPage";
import HomePage from './pages/home/HomePage';
import ConnectionErrorPage from './pages/conectionError/ConnectionErrorPage';
import ErrorPage from './pages/error/ErrorPage';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import getNumberOfProuductsInCart from './helpers/getNumberOfProuductsInCart';


function App() {
  
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(getNumberOfProuductsInCart())
  const handleNumberOfProductsInCart = (numberOfProducts:number): void => {
    setNumberOfProductsInCart(numberOfProducts)
  }
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
    <Nav  filterButtonStyle={filterButtonStyle} hideFilter={hideFilter} showFilter={showFilter} displayFilterStyle={displayFilterStyle} hideFilterStyle={hideFilterStyle} />
    <Routes>
        <Route path={`/shop/:beerCategory/shop_page=:selectedPage`} element={<ShopPage  displayFilterButton={displayFilterButton} filterStyle={filterStyle} />} />
        <Route path={`/shop/:beerCategory/single_beer/id=:itemId`} element={<SingleBeerPage handleNumberOfProductsInCart={handleNumberOfProductsInCart} hideFilterButton={hideFilterButton} />} />
        <Route path='/cart' element={<CartPage handleNumberOfProductsInCart={handleNumberOfProductsInCart} hideFilterButton={hideFilterButton} />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/Connection_Error' element={<ConnectionErrorPage hideFilterButton={hideFilterButton} />} />
        <Route path='*' element={<ErrorPage hideFilterButton={hideFilterButton} />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
