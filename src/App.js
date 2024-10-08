import logo from './logo.svg';
import './App.css';
// import { IoAccessibilityOutline } from "react-icons/io5";
import { GrHome } from "react-icons/gr";
//import { IoAlarmSharp } from "react-icons/io5";
// import Hello from './01/Hello'
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto'
// import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
//import Traffic from './09/Traffic';
import MyRef from './10/MyRef';

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <header className="w-full h-20 flex  items-center bg-slate-500">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello/> */}
        {/* <IoAccessibilityOutline /> */}
        {/*<MyClock/>*/}
        {/* <BoxOffice/> */}
        <p className='text-2xl font-bold p-5'>리액트 기초 </p>
        <p className='text-4xl font-bold p-5'><GrHome /></p>
        
      </header>
      <main className='w-full grow
                       flex flex-col items-center justify-center
                       overflow-y-scroll'>
               {/*<MyDiv1 >}*/}
               {/* <MyList/> */}
                {/*<Lotto/>*/ }
                {/*<FoodMain/>*/}
                {/* <MyClock/> */}
                <BoxOffice/>
        {/* <MyBox /> */}
        {/* <Traffic/> */}
        {/* <MyRef/> */}
      </main>
      <footer className='w-full h-20 flex justify-center items-center bg-black text-white'>
        <p>k-digital 8기 송소정</p>
      </footer>

    </div>
  );
}

export default App;
