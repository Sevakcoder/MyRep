import React from 'react'
import cleanGoBackStorage from "../../helpers/cleanGoBackStorage";
import { useEffect } from 'react' 

interface IComponentValue {
  hideFilterButton: Function
}

const Error = ({hideFilterButton}: IComponentValue) => {
  
  cleanGoBackStorage();
  useEffect(() => {
    hideFilterButton();
  },[])

  return (
    <div id='display'>
      404 Error, page not found !
    </div>
  )
}

export default Error
