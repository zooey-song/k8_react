                                  
import { useEffect, useState} from "react";

export default function Festival() {
  const [tdata, setTdata] = useState([]);
  const [gunm,setGunm] = useState([]);


  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY ;

    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;


    console.log(url);

    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err)) ;

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    // console.log("getFetch:", data.response.) ;
    console.log(data.getFestivalKr.item);
    setTdata(data.getFestivalKr.item);


  }
  //컴포넌트 실행시 한번만 실행
  useEffect(()=>{

    getFetchData();
  },[]);
 
  useEffect(()=>{
    let tm = tdata.map(item=> item.GUGU_NM);
    tm=[]
    tm = tm.map(item=> aption )

  },[tdata]);
 
 
 
 
  return (
    <div>
      <div>
        input
      </div>
      div Festival
    </div>
  )
}
