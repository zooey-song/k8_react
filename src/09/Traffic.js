 import { useEffect, useState } from "react";
import TrafficNav from "./TrafficNav"; 


export default function Traffic({props}) {
  const [tdata, setTdata] = useState([]);

  const getFatchData = ()=>{
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`

    console.log('1',url);

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
      ;
  }

  useEffect(()=>{
    getFatchData();

  },[]);
   
  useEffect(()=>{
    //if (!tdata) return ;

    console.log('2',tdata)
    let tm = tdata.map( (i) => i['사고유형대분류']);
    tm = [...new Set(tm)]
    console.log('3',tm);
  },[tdata]);



  return (
  <div className="w-full flex flex-col justify-between items-center">
    <TrafficNav title='대분류'/>
    <TrafficNav title='중분류'/>
  </div>

)
}
