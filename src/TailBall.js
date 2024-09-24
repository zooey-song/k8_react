export default function TailBall({n}) {
const ballcolor={
  'b0' : 'bg-red-300',
  'b1' : 'bg-yellow-300',
  'b2' : 'bg-lime-300',
  'b3' : 'bg-sky-300',
  'b4' : 'bg-green-300'
}

  return (
    <div className={`w-24 h-24
                    flex justify-center items-center
                    rounded
                    p-5
                    font-bold
                    ${ballcolor['b'+ Math.floor(n / 10)]}
                    text-white
                    font-bold
                    rounded-full text-2x1`}>
      {n}
    </div>
  )
}
