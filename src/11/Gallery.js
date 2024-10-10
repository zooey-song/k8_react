import TailCard from "../UI/TailCard"
import TailBtn from "../UI/TailBtn"
import { useRef, useEffect, useState } from "react";
export default function Gallery() {
  const foc = useRef();
  const getFetchData = async()=>{
    const apikey = process.env.REACT_APP_API_KEY
    const keyword = encodeURI(foc.current.value)
    const [tdata, setTdata] =  useState([]);
    const [tags, setTags] = useState([]);
    console.log(' url 이전');

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = `${url}serviceKey=${apikey}`;
    url = `${url}&numOfRows=20`
    url = `${url}&pageNo=1`
    url = `${url}&MobileOS=ETC&MobileApp=AppTest`
    url = `${url}&arrange=A&keyword=${keyword}&_type=json`


    console.log(url);

    const resp = await fetch(url);
    const data = await resp.json();
    console.log("getfetch",data,Response.body.items.item);

    setTdata(data,Response.body.items.item)

  }

  const handleOK =()=>{
    if(foc.current.value == ''){
      alert("값이 없습니다.")
      foc.current.focus();
      return
    }
    getFetchData();
  }

  const handleCancel =()=>{
    foc.current.value = '';
    foc.current.focus();
    
  }

  useEffect(()=>{
    foc.current.focus();

  },[]);
  useRef(()=>{
    foc.current.focus();
  })

  useEffect(()=>{
    const tm = tdata.map(item=>  <TailCard  key = {item}
                                            imgUrl = {item.galWebImageUrl}
                                            title = {item.galTitle}
                                            content = {item.galPhotographyLocation}
                                            kw = {item.galSearchKeyword}/> );
    setTags(tm);
  },[tdata]);


  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-end items-center">
            <input ref={foc} type='text' className="w-10/12 form-input"
              id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailBtn
              caption='확인'
              color='blue'
              handleClick= {handleOK}
              size='w-1/2' />
            <TailBtn caption='취소'
              color='blue'
              handleClick={handleCancel}
              size='w-1/2' />
          </div>
        </div>
      </div>
      <div className="w-10/12 p-5 grid grid-col-1 lg:grid-col-2 xl:grid-cols-1 gap-4">
        {tags}
        </div>
      {/**/}
    </div>
  )
}
