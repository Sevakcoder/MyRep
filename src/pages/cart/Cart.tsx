import React from 'react'
import { useState } from 'react';
import removeFromCart from './removeFromCart';
import encreaseQTY from './encreaseQTY';
import decreaseQTY from './decreaseQTY';
import totalPrice from './totalPrice';
import { ICartBeerItemValue } from '../../data-structures/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/features/cartSlice';


export default function () {

    const cartItems = useSelector(selectCart);
    const dispatch = useDispatch();

    if (cartItems.length === 0) {
        return (
            <div id='display'>
                <div id='cart-item-bar'>
                    Now your cart is empty
                </div>
            </div>
        )
    }
    return (
        <div id='display' >
            <div id='cart-item-bar'>
                {
                    cartItems.map((item: ICartBeerItemValue) => {

                        let price;
                        try {
                            price = `$${item.srm.toFixed(2)}`
                        } catch (error) {
                            price = `$${item.srm}`
                        }
                        return (
                            <div key={item.id} id={`cart-${item.id}`} className='cart-item-element' >
                                <img className='cart-item-element-image'
                                    alt='Sorry, no picture to show'
                                    src={item.image_url}
                                ></img>
                                <div id={`discription-${item.id}`} className='cart-item-discription' >
                                    <div id={`cart-item-name-tagline-${item.id}`} className='cart-item-name-tagline' >
                                        <p className='cart-item-tagline' >{item.tagline}</p>
                                        <p className='cart-item-name' >{item.name}</p>
                                    </div>
                                    <div id={`cart-item-quantity-div-${item.id}`} className='cart-item-quantity-div' >
                                        <button className='cart-item-quantity-decrement'
                                            onClick={() => {
                                                decreaseQTY(item, dispatch, cartItems);
                                            }} ><i className="fa fa-angle-down"></i></button>
                                        <input className='cart-item-quantity'
                                            min={1}
                                            max={10}
                                            step={1}
                                            value={item.quantity}
                                            onChange={() => { return }}
                                        ></input>
                                        <button className='cart-item-quantity-encrement'
                                            onClick={() => {
                                                encreaseQTY(item, dispatch, cartItems)
                                            }} ><i className="fa fa-angle-up"></i></button>
                                    </div>
                                    <div className='cart-item-remove'
                                        onClick={() => {
                                            removeFromCart(item, dispatch, cartItems)
                                        }}
                                    ><i className="fa fa-close"></i></div>
                                    <p className='cart-item-price' >
                                        {price}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <hr className='cart-total-line'></hr>
                <label className='cart-total-label'>Total: {`$${totalPrice(cartItems)}`}</label>
                <button className='cart-check-out-btn'>CHECK OUT</button>
            </div>
        </div>
    )
}


