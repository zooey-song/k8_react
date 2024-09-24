
export default function TailButton({caption, color}) {
  const btColor = {
    'blue' : 'bg-blue-800' ,
    'orange' : 'bg-orange-800'
  };

  const btColorHover = {
    'blue' : 'hover:bg-blue-600' ,
    'orange' : 'hover:bg-orange-600'
  };


  return (
    <button className={`inline-flex justify-center items-center
                       p-3 mx-2
                       ${btColor[color]} text-white
                       ${btColorHover[color]} font-bold
                       rounded-md
                       `}>
      {caption}
    </button>
  )
}