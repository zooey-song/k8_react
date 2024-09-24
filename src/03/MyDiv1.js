import MyDiv2 from './MyDiv2'

//export default function MyDiv1(probs) {
  export default function MyDiv1({dn1,dn2,dn3}) {
  const d1 = "div1";
  const d2 = "div2";
  const d3 = "div3";
  //console.log(probs);
  return (
    <div className='w-8/12 h-4/6
                    bg-orange-600 flex flex-col justify-center items-center text-white font-bold ' >
      <p className='w-full justify-start items-center h-10 p-5 m-2'>{d1}</p>
      
      {/*<MyDiv2 dn1={d1} dn2={d2} dn3={d3}/>*/}
      </div>
  )
}

