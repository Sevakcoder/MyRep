import React from 'react'
import '../../styles/select.css';
import { useState, useEffect } from "react";
import getItemsByUrl from "../../helpers/getItemsByUrl";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import SimilarItems from './SimilarItems';
import SingleBeer from './SingleBeer';
import BackButton from './BackButton';
import { IBeerItemValue } from '../../data-structures/interfaces';

interface ISingleBeerPageProps {
  hideFilterButton: Function
}

const SingleBeerPage = ({ hideFilterButton }: ISingleBeerPageProps) => {

  const pageURL = useNavigate();
  // const pageParams: any = useParams();
  const { beerCategory, itemId }: any = useParams()
  const ids = `&ids=${itemId}`
  const url = `https://api.punkapi.com/v2/beers?${ids}`;
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
  }, [url]);

  useEffect(() => {
    hideFilterButton();
  }, [])

  window.scrollTo(0, 300);

  if (!["filtered_beer", "non_filtered_beer", "alcohol_beer", "non_alcohol_beer"].includes(beerCategory)) {
    return <Navigate to={'/'} />
  }

  if ((beerCategory === "filtered_beer") && !(Number(itemId) >= 1 && Number(itemId) <= 60)) {
    return <Navigate to={'/'} />
  }

  if ((beerCategory === "non_filtered_beer") && !(Number(itemId) >= 61 && Number(itemId) <= 120)) {
    return <Navigate to={'/'} />
  }

  if ((beerCategory === "alcohol_beer") && !(Number(itemId) >= 121 && Number(itemId) <= 180)) {
    return <Navigate to={'/'} />
  }

  if ((beerCategory === "non_alcohol_beer") && !(Number(itemId) >= 181 && Number(itemId) <= 240)) {
    return <Navigate to={'/'} />
  }

  return (<>{
    selectedItem.map((item: IBeerItemValue) => {
      return (
        <div key={item.id}>
          <BackButton />
          <SingleBeer item={item} />
          <SimilarItems item={item} />
        </div>
      )
    })
  }
  </>

  )
}

export default SingleBeerPage;
