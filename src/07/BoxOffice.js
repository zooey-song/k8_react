import React, { useEffect, useState } from 'react'
import TailButton from '../TailBt'
import BoxOfficeTr from './BoxOfficeTr';

export default function BoxOffice() {
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [info,setInfo] = useState([]);

  const GetFetchdata = () =>{
    const apikey = process.env.REACT_APP_MV_KEY;
    const dt = '20240925'

    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    url = `${url}key=${apikey}&targetDt=${dt}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))

      console.log('apikey=',apikey);
      console.log(url);
  };
const handleTrClick= (item)=>
{
  console.log(item);
  let tm = `[${item.movieCd}] ${item.movieNm}  :
            누적 관객수  ${parseInt(item.audiCnt).toLocaleString()}입니다. `
  setInfo(tm);
}
  
//맨처음  한번만 실행
  useEffect (()=>{
    GetFetchdata();

  },[]);

  useEffect (()=>{
console.log(tdata);

let tm = tdata.map(item=><BoxOfficeTr mv = {item}
                                      key = {item.movieCd}/> );
  setTrs(tm);
  },[tdata] );

 // fatch data 가 채워지면 
  // //state 변수 cnt가 변경이 될때
  // useEffect (()=>{
  //   console.log('useEffect[cnt]',cnt);
  // },[cnt]);
  
  // // 변경이 일어날때마다 실행
  // useEffect (()=>{
  //   console.log('useEffect',cnt);
  // },[]);


  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-900 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        순위
                    </th>
                    <th scope="col" className="px-6 py-3">
                        영화명
                    </th>
                    <th scope="col" className="px-6 py-3">
                        매출액
                    </th>
                    <th scope="col" className="px-6 py-3">
                        누적관객수
                    </th>
                    <th scope="col" className="px-6 py-3">
                        배출비율
                    </th>
                </tr>
            </thead>
            <tbody>
                {trs}
                </tbody>
                <tfoot>
                    <tr className='bg-black text-white
                                    text-center h-10 p-2'>
                      <td colSpan={5}>{info}</td>               
                    </tr>
                </tfoot>
        </table>
    </div>

  );
}
