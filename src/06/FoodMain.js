import React from 'react'
import fooddata from './fooddata.json'
import FoodCard from './FoodCard'
export default function FoodMain() {


  return (//구분, 운영장주체명 ,사업장 소재지
    <div className='w-3/4'>
      
            <FoodCard/>
    </div>
  )
}
