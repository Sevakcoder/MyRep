import React from 'react'
import '../../styles/cart.css';
import DisplayCart from './DisplayCart'
import cleanGoBackStorage from '../../helpers/cleanGoBackStorage'
import { useEffect } from 'react' 

interface IComponentValue {
    handleCartSummary: Function,
    hideFilterButton: Function
}

const Cart = ({handleCartSummary,hideFilterButton}: IComponentValue) => {
    
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
  