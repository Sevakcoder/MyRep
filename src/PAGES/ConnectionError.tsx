import React from 'react'
import cleanGoBackStorage from "../OTHER/cleanGoBackStorage";
import { useEffect } from 'react' 

interface CompType {
  hideFilterButton: Function
}

const ConnectionError = ({hideFilterButton}: CompType) => {
  
  cleanGoBackStorage();
  useEffect(() => {
    hideFilterButton();
  },[])

  return (
    <div id='display'>
    <h3>No internet</h3> 
    <h4>Try:</h4>
    <ul>
    <li><p>Checking the network cables, modem, and router</p></li>
    <li><p>Reconnecting to Wi-Fi</p></li>
    </ul>
    <h5>ERR_INTERNET_DISCONNECTED</h5>
</div>
)
}

export default ConnectionError;
