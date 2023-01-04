import React from 'react'
import cleanGoBackStorage from "../../helpers/cleanSelectedItemInfo";
import { useEffect } from 'react'

interface IErrorProps {
  hideFilterButton: Function
}

const Error = ({ hideFilterButton }: IErrorProps) => {

  cleanGoBackStorage();
  useEffect(() => {
    hideFilterButton();
  }, [])

  return (
    <div id='display'>
      404 Error, page not found !
    </div>
  )
}

export default Error
