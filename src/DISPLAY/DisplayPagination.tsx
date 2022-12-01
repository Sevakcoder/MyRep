import React from 'react'
import '../CSS/pagination.css'

interface CompType {
  pagesAmount: number, 
  currantPage: number,
  selectPage: Function
}

export default function({pagesAmount, currantPage, selectPage}: CompType) {
  const pageNumbers: number[] = []
  for (let i = 1; i <= pagesAmount; i++) {
      pageNumbers.push(i);
      
  }
  if (pagesAmount ===0) {
    return (
      <></>
    )
  }
  return (
    <>
      <p className="pagenumbers"><i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i></p>
        {
          pageNumbers.map((number) => {
          let id = `pagenumber-${number}`;
          let className = "";
          {Number(currantPage) === number ? className="active":  className="pagenumbers"};

          return <p key={number} id={id}
          className={className}
          onClick={() => {
            selectPage(number)
            window.scrollTo(0,300)
          }}
          >{number}</p>
        
       })
      }
      <p className="pagenumbers"><i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></p>
    </>
  )
}




