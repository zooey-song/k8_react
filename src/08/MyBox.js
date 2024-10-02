import MyBoxFlag from "./MyBoxFlag"
export default function MyBox() {


  return (
    <div className="w-full h-full flex justify-center items-center" >
      <div className="w-10/12 grid grid-cols2 gap-4"></div>
        <MyBoxFlag color = 'blue'/>
        <MyBoxFlag color = 'lime'/>
        <MyBoxFlag color = 'orange'/>
    </div>
  )
}
