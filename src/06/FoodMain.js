import React from 'react'
import fooddata from './fooddata.json'
import FoodCard from './FoodCard'
import { useState } from 'react'
import TailButton from '../UI/TailBt'
export default function FoodMain() {

  const [tags,setTags] = useState();
  //let bts = fooddata.map(item=> item["운영주체 분류"])
  //console.log(bts);

  //let tm = fooddata.map(item =>  <FoodCard key = {item.사업장명}/>);
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ',''));
  tm = [... new Set (tm)]

  const bts = tm.map(item => <TailButton 
                      key={item}
                      caption={item}
                      color='blue'
                      handleClick={() => handleFood(item)}
                      />)
  console.log(tm)
  //setTags(tm)

  const handleFood = (c) => {
    console.log(c)
    let tm = fooddata.filter(item => item["운영주체 분류"].replace(' ','') === c)
                      .map(i=><FoodCard obj={i} key={i.사업장명}/>)
    setTags(tm);
  }

  
  return (//구분, 운영장주체명 ,사업장 소재지
    <div className='w-full flex flex-col justify-start h-screen'>
      <div className='w-full h-20 bg-blue-100 flex justify-center items-center' >
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-2'>
        {tags}
      </div>
    </div>
  )
}
