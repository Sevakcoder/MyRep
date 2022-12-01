import React from 'react'
import cleanGoBackStorage from "../OTHER/cleanGoBackStorage";
import { useEffect } from 'react' 

interface CompType {
  hideFilterButton: Function
}

const Error = ({hideFilterButton}: CompType) => {
  
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
