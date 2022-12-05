import React from 'react'
import '../../styles/select.css';
import { useState, useEffect } from "react";
import getItemsByUrl from "../../helpers/getItemsByUrl";
import { useNavigate, useParams } from 'react-router-dom';
import DisplaySimilars from './DisplaySimilars';
import DisplaySingleItem from './DisplaySingleItem';
import DisplayBackButton from './DisplayBackButton';
import { IBeerItemValue } from '../../constants/interfaces';

interface IComponentValue {
  handleCartSummary: Function,
  hideFilterButton: Function
}

const SingleBeer = ({handleCartSummary,hideFilterButton}: IComponentValue) => {
  
  const pageURL = useNavigate();
  const params: any = useParams();
  const itemId = params.itemId.slice(1)
  const url = `https://api.punkapi.com/v2/beers?&ids=${itemId}`;
  const x: IBeerItemValue[] = []
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
            selectedItem.map((item: IBeerItemValue) => {
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
