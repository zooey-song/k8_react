import React from 'react'
import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'

export default function FoodCard() {
  //<img src={busan} alt = '광역지원센터'/>
  //<img src={bank} alt = '기초푸드뱅크'/>

  const obj = {
  "구분": "광역지원센터",
  "시군구": "부산시",
  "사업장명": "부산광역푸드뱅크",
  "신고기준": "당연",
  "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
  "연락처(대표번호)": "051-791-1377",
  "팩스번호": "051-714-3096",
  "운영주체 분류": "1. 사회복지법인",
  "운영주체명": "부산광역시사회복지협의회"
}

  return (
    <div className='w-1/2 h-28'>
      <div className='flex'>
        <img src={market} alt = '기초푸드마켓'/>
      </div>
      <div className='w-2/3 h-10 flex flex-col'>
        <h2 className=''>{obj["구분"]}</h2>
        {obj["사업장"]}
        {obj["사업장 소재지"]}
        {obj["연락처(대표번호)"]}
      </div>
    </div>
  )
}
