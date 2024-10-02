import Traffic from "./Traffic"
import TailBt from "../TailBt"
import TailButton from "../TailBt";
import { TfiAgenda } from "react-icons/tfi";
import { useEffect, useState } from "react";
export default function TrafficNav({title}) {
  const [sel, setSel] = useState() ;
  const handleBtClick = (item) => {
    setSel(item)
  }

  const c = ['차대사람','차대차','차량단독', '철길건널목']
  const tags = c.map(item => <TailButton key ={item}
                                      caption={item}
                                      color = {item == sel ? 'orange' : 'blue'}
                                      handleClick = {()=>handleBtClick(item)} />);
  

  useEffect(()=>{
    console.log(sel);

  },[sel]);

  return (
    <div>
    <div className="w-10/12 grid-cols-3 justify-between items-center">
      
      <div className="w-1/5 text-2xl font-bold
                      flex justify-center items-center">
        교통사고 {title}
      </div>
      <div className="flex justify-end items-center" >
        {tags}
      </div>
    </div>
    </div>
  )
}
