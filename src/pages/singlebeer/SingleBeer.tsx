import React from 'react'
import { useState } from "react";
import addToCart from '../../helpers/addToCart'
import { IBeerItemValue } from '../../data-structures/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../store/features/cartSlice';

interface ISingleBeerProps { item: IBeerItemValue }

export default function ({ item }: ISingleBeerProps) {
  const id = `item-${item.id}`;
  const volume = `${item.volume.value}${item.volume.unit}`;
  const bitterness = `bitterness ${item.ibu}`;
  const firstBrewed = `first brewed ${item.first_brewed}`;
  let price;
  try {
    price = `$${item.srm.toFixed(2)}`
  } catch (error) {
    price = `$${item.srm}`
  }
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCart)
  return (
    <div id="display">
      <div id={id} className="selected-item">
        <img className="selected-item-image"
          alt="Sorry, no picture to show"
          src={item.image_url}
        ></img>
        <img className="selected-item-image-before"
          alt="Sorry, no picture to show"
          src={item.image_url}
        ></img>
        <div id="selected-item-discription">
          <p className="selected-item-volume">{volume}</p>
          <p className="selected-item-name">{item.name}</p>
          <p className="selected-item-info">{item.description}</p>
          <p className="selected-item-bitterness">{bitterness}</p>
          <p className="selected-item-first-brewed">{firstBrewed}</p>
          <p className="selected-item-price">{price}</p>
          <div id="add-to-cart-bar">
            <input id="selected-item-quantity"
              type={"number"}
              min={1}
              max={10}
              value={quantity}
              onChange={(evt) => {
                setQuantity(Number(evt.target.value))
              }}
            ></input>
            <button id="btn-add-to-cart"
              onClick={() => {
                const x = { ...item, quantity: quantity };
                addToCart(x,dispatch,cartItems);
              }}
            >ADD TO CART</button>
            <button id="btn-wish">WISH</button>
          </div>
        </div>
      </div>
    </div>
  )
}


