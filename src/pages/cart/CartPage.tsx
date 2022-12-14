import React from 'react'
import '../../styles/cart.css';
import Cart from './Cart';
import cleanSelectedItemInfo from '../../helpers/cleanSelectedItemInfo';
import { useEffect } from 'react';

interface ICartPageProps {
    handleNumberOfProductsInCart: Function,
    hideFilterButton: Function
}

const CartPage = ({ handleNumberOfProductsInCart, hideFilterButton }: ICartPageProps) => {

    cleanSelectedItemInfo();

    useEffect(() => {
        hideFilterButton();
    }, [])

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
        <Cart handleNumberOfProductsInCart={handleNumberOfProductsInCart} />
    )
}

export default CartPage;
