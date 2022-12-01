import React from 'react'
import '../CSS/select.css'
import { useState, useEffect } from "react";
import getItemsByUrl from "../GETTERS/getItemsByUrl";
import { useNavigate, useParams } from 'react-router-dom';
import DisplaySimilars from '../DISPLAY/DisplaySimilars';
import DisplaySingleItem from '../DISPLAY/DisplaySingleItem';
import DisplayBackButton from '../DISPLAY/DisplayBackButton';
import { ItemType } from '../OBJECTS/interfaces';

interface CompType {
  handleCartSummary: Function,
  hideFilterButton: Function
}

const SingleBeer = ({handleCartSummary,hideFilterButton}: CompType) => {
  
  const pageURL = useNavigate();
  const params: any = useParams();
  const itemId = params.itemId.slice(1)
  const url = `https://api.punkapi.com/v2/beers?&ids=${itemId}`;
  const x: ItemType[] = []
  const [selectedItem, setSelectedItem] = useState(x);
  
  useEffect(() => {
    try {
      getItemsByUrl(url).then(x => {
        setSelectedItem(x)
      })
  
    } catch (error) {
      pageURL('/Connection_Error');
      return;
      }
  },[url]);
  
  useEffect(() => {
    hideFilterButton();
  },[])

  window.scrollTo(0,300);
  
  return (<>{
            selectedItem.map((item: ItemType) => {
            return (
              <div key={item.id}>
              {/* <CreateFilter /> */}
              <DisplayBackButton />
              <DisplaySingleItem item={item} handleCartSummary={handleCartSummary} />
              <DisplaySimilars item={item} />
              </div>
            )
          })
        }
          </>

  )
}

export default SingleBeer
