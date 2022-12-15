import React from 'react'
import '../../styles/cart.css';
import Cart from './Cart'
import cleanGoBackStorage from '../../helpers/cleanGoBackStorage'
import { useEffect } from 'react' 

interface IComponentValue {
    handleCartSummary: Function,
    hideFilterButton: Function
}

const CartPage = ({handleCartSummary,hideFilterButton}: IComponentValue) => {
    
    cleanGoBackStorage();

    useEffect(() => {
        hideFilterButton();
      },[])
    
    if (!localStorage.cartItemsList) {
        return (
            <div id='display'>
                <div id='cart-item-bar'>
                    Your cart is empty
                </div>
            </div>
        )
    }
    return (
          <Cart handleCartSummary={handleCartSummary} />
    )
}
  
export default CartPage;
  