
import { useState, useEffect } from "react";
export default function MyBox() {
  const [blueFlag, setBlue] = useState(false);
  const [orangeFlag, setOrange] = useState(false);

  const handleBlue = ()=>{
    setBlue(!blueFlag); 
    console.log(blueFlag);
  }

  const handleOrange = ()=>{
    setOrange(!orangeFlag); 
    console.log(orangeFlag);
  }

  useEffect(()=>{
    console.log('useEffect blue =>',blueFlag)
  },[blueFlag]);
  useEffect(()=>{
    console.log('useEffect orange =>',orangeFlag)
  },[blueFlag]);

  return (
    <div className="w-full h-full flex justify-center items-center" >
      <div className={`"w-1/2 flex flex-col  p-5 m-10 ${blueFlag ? `bg-blue-600`: ''}
                  border border-slate-400 rounded-md"`}>
        <div className="flex justify-center items-center text-3xl text-blue-700 font-bold
                   border border-slate-800 rounded-md m-10 bg-teal-50">
          blue
        </div>
        <div className="flex justify-center items-center text-3xl font-bold
                    border border-blue-800 rounded-md m-10 bg-blue-50" 
                    onClick={handleBlue}>
          blue toggle
        </div>

      </div>
      <div className={`"w-1/2 flex flex-col  p-5 m-10 ${orangeFlag ? `bg-orange-600`: ''}
                  border border-slate-400 rounded-md"`}>
        <div className="flex justify-center items-center text-3xl text-orange-700 font-bold
                   border border-slate-800 rounded-md m-10 bg-teal-50">
          blue
        </div>
        <div className="flex justify-center items-center text-3xl font-bold
                    border border-orange-800 rounded-md m-10 bg-blue-50" 
                    onClick={handleOrange}>
          blue toggle
        </div>

      </div>
    </div>
  )
}
