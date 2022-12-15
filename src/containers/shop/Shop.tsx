import React from 'react'
import { useParams } from 'react-router-dom';
import setSelectedItemInfo from '../../api/setSelectedItemInfo'
import selectItem from '../../helpers/selectItem';
import { useNavigate } from 'react-router-dom';
import { IBeerItemValue } from '../../data-structures/interfaces';

interface IComponentValue {
    filterRef: any,
    perPageItemsList: IBeerItemValue[]
}

export default function({filterRef,perPageItemsList}: IComponentValue) {
   
    const selectedItemsPageParams = useParams();
    const selectedPageURL: any = Object.values(selectedItemsPageParams)[0]
    const pagePath = useNavigate();
    if (localStorage.selectedItemPosY) { 
        window.scrollTo(0,Number(localStorage.selectedItemPosY) - 100);
    }
    else {
        window.scrollTo(0,300)
    }

    const select = (id: number) => {
        selectItem(id,pagePath)
    }

    return (
    <>
        <div id = "items-display-bar">
            {
            perPageItemsList.map((item: IBeerItemValue) => {
                let price;
                try {
                    price = `$${item.srm.toFixed(2)}`
                } catch (error) {
                    price = `$${item.srm}`
                }
                let itemBorderStyle = "";
                if (Number(item.id) === Number(localStorage.selectedItemId)) {
                    itemBorderStyle="2px solid black";
                }
                return (
                    <div key={item.id} id={`item-${item.id}`} 
                        className="item-element item-element-active" 
                        style={{border: itemBorderStyle}} >
                        <img className="item-element-image"
                        src={item.image_url}
                        alt="Sorry, no picture to show">
                        </img>
                        {/* <Link> */}
                        <p className="item-element-view" onClick={(evt) => {
                           select(item.id);
                           let Y: any = document.getElementById(`item-${item.id}`)
                           let posY = Y.offsetTop;
                           let selectedPageFilter = {
                                brewedAfter: filterRef.brewedAfterRef.current.value,
                                brewedBefore: filterRef.brewedBeforeRef.current.value,
                                searchValue: filterRef.searchRef.current.value
                           }
                           setSelectedItemInfo(item.id,posY,selectedPageFilter,selectedPageURL);
                        }}>
                        VIEW
                        </p>
                        {/* </Link> */}
                        <p className="item-element-name">
                            {item.name}
                        </p>
                        <p className="item-element-price">
                            {price}   
                        </p>
                    </div>
                )
            })
            }
        </div>
    </>

  )
}


