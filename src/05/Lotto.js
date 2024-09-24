import TailBt from "../TailBt";
import TailBall from "../TailBall";
export default function Lotto() {
  const haneleClick1 = ()=>{
    console.log("ok");

  }
  const haneleClick2 = ()=>{
    console.log("end");

  }

  return (
    <div>
      <div className="flex justify-center">
        <TailBall n={10}/>
        <TailBall n={20}/>
        <TailBall n={30}/>
        <TailBall n={40}/>
        <TailBall n={20}/>
        <TailBall n={40}/>

      </div>
      <div className=" flex justify-center items-center">
        <TailBt caption ={'로또번호 생성'} color = 'orange' handleClick = {haneleClick1} />
        <TailBt caption ={'로또번호 지우기'} color = 'blue' handleClick = {haneleClick2} />
      </div>
    </div>
  )
}
