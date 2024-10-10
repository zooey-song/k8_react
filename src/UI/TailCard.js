

export default function TailCard({imgUrl, title, content, kw}) {
  let kws = [];
  if(kw.includes(',')){
    kws = kw.split(',');
  }
  else {
    kws.push(kw);
  }

  const kwArr = kw.includes(',') ? kw.split(',') : [kw]; 
  const kwTags = kws.map(item => <span key={item} className="inline-flex bg-slate-200 p-1 m-2 rounded-sm">{item}</span>)

  console.log(kwArr);

  return (

    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
            src={imgUrl} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
            </h5>
          <p className="mb-3 font-normal text-gray-700">
            {content}
          </p>
          <p>{kwTags}</p>

        </div>
    </div>

  )
}
