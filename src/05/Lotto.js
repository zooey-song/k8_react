import TailBt from "../UI/TailBt";
import TailBall from "../TailBall";
import { useState } from "react";


export default function Lotto() {
  //state 변수는 useState Hook으로 만듬
  const [tags, setTags] = useState();

  const handleClick1 = ()=>{
    console.log("ok")
    let arr = []
    while(arr.length <7){
      let n = Math.floor(Math.random()*45) +1
      if(!arr.includes(n)) arr.push(n)
    }
    //  Math.floor(Math.random()*45) +1
    //setTags(<h2>{n}</h2>);
    const bonus = arr.splice(-1)
    arr.sort((a,b)=>a-b)
    
    arr = arr.concat(bonus)
    console.log(arr)
    // let tm = arr.map(()=>{return {n}})
    let tm = arr.map(item=>{return <TailBall key = {'b'+item} n = {item}/>})
    tm.splice(6,0,<div className="text-3xl mx-2 font-bold items-center" key="sp">+</div>)
    console.log(tm)
    setTags(tm)

  }
  const handleClick2 = ()=>{
    console.log("end");

  }

  return (
    <div className="w-full">
      <div className="flex mb-10 w-full justify-center items-center">
        {tags}
        {/* <TailBall n={10}/>
        <TailBall n={20}/>
        <TailBall n={30}/>
        <TailBall n={40}/>
        <TailBall n={20}/>
        <TailBall n={40}/> */}

      </div>
      <div className=" flex justify-center items-center">
        <TailBt caption ={'로또번호 생성'} color = 'orange' handleClick = {handleClick1} />
        {/* <TailBt caption ={'로또번호 지우기'} color = 'blue' handleClick = {handleClick2} /> */}
      </div>
    </div>
  )
}
