import { useState, useEffect } from "react";
export default function MyBoxFlag({color}) {
    const [flag, setFlag] = useState(false);
    
    const handleFlag = ()=>{
      setFlag(!flag); 
      console.log(flag);
    }

    useEffect(()=>{
      console.log('useEffect blue =>',flag)
    },[flag]);

  return (
    <div className="w-full h-full flex justify-center items-center" >
      <div className={`"w-1/2 flex flex-col  p-5 m-10 ${flag ? `bg-${color}-600`: ''}
                  border border-slate-400 rounded-md"`}>
        <div className={`"flex justify-center items-center text-3xl ${flag ? `text-${color}-700` :''} font-bold
                   border border-slate-800 rounded-md m-10 bg-teal-50"`}>
          {color}
        </div>
        <div className="flex justify-center items-center text-3xl font-bold
                    border border-blue-800 rounded-md m-10 bg-blue-50" 
                    onClick={handleFlag}>
          {color} toggle
        </div>
      </div>
      
    </div>
  )
}