import React from 'react'
import BoxOffice  from './BoxOffice'
export default function BoxOfficeTr({mv}) {
 
  const handlebox = (c) => {
    console.log("click")
    
  }
  return (
  <tr className="bg-white dark:bg-gray-800" onClick={handlebox}>
    <th scope="row" clclassNameass="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      <div>{mv.rank}</div>  
    </th>
    <td className="px-6 py-4">
      <div>{mv.movieNm}</div>
    </td>
    <td className="px-6 py-4">
    <div>{ parseInt(mv.salesAmt)}</div>
    </td>
    <td className="px-6 py-4">
        {mv.audiAcc}
    </td>
    <td className="px-6 py-4">
        {mv.salesShare}
    </td>
  </tr>



  )
}
