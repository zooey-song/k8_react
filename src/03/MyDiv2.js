import MyDiv3 from './MyDiv3'

//export default function MyDiv2(probs) {
  export default function MyDiv2({dn1,dn2,dn3}) {

  return (
    <div className='w-6/12 h-3/6
                    bg-orange-200 flex flex-col justify-center items-center text-white font-bold' >
        <p className='w-full justify-start items-center h-10 p-5 m-2'>{`${dn1} > ${dn2}`}</p>
        
        {/*<MyDiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3}/>*/}

          
    </div>
  )
}

