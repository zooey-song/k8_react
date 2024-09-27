import React from 'react'
import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import {useState} from "react"

export default function FoodCard({obj}) {
  //<img src={busan} alt = '광역지원센터'/>
  //<img src={bank} alt = '기초푸드뱅크'/>


  const [isShow, setIsShow] = useState(false);

const handleClick1 = ()=>{
  console.log("end");
  setIsShow(!isShow);
}

   const objImg = {
     "광역지원센터": busan,
     "기초푸드뱅크": bank,
     "기초푸드마켓": market
   }

  return (
    <div className='w-full flex'>
      <div className='mr-5'>
        {/* <img src={obj["구분"] === '광역지원센터' ? busan :
            obj["구분"] === '기초푸드뱅크' ? bank : market} alt = {obj['구분']} /> */}
            <img src={objImg[obj["구분"]]} art = {obj["구분"]}/>
      </div>
      <div className='w-2/3 flex flex-col justify-between items-start'>
        <div>
          <div><h3>{obj["구분"]}</h3></div>
          <div>{obj["운영주체명"]}</div>
          <div>{obj["사업장 소재지"]}</div>
          
        </div>

        <div className='w-full h-8 p-2 fiex justify-end items-center
                      bg-slate-600 text-white font-bold'
                      onClick = {handleClick1}>
             {isShow ? obj["연락처(대표번호)"] : ''}
             {/* {isShow && obj["연락처(대표번호)"]} */}
        </div>
        
      </div>
    </div>
  )
}
