import React from 'react'
import '../CSS/cart.css'
import DisplayCart from '../DISPLAY/DisplayCart'
import cleanGoBackStorage from '../OTHER/cleanGoBackStorage'
import { useEffect } from 'react' 

interface CompType {
    handleCartSummary: Function,
    hideFilterButton: Function
}

const Cart = ({handleCartSummary,hideFilterButton}: CompType) => {
    
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
          <DisplayCart handleCartSummary={handleCartSummary} />
    )
}
  
export default Cart;
  