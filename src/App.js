import logo from './logo.svg';
import './App.css';
// import { IoAccessibilityOutline } from "react-icons/io5";
import { GrHome } from "react-icons/gr";
//import { IoAlarmSharp } from "react-icons/io5";
// import Hello from './01/Hello'
import MyClock from './02/MyClock';
import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <header className="w-full h-20 flex  items-center bg-slate-500">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello/> */}
        {/* <IoAccessibilityOutline /> */}
        {/*<MyClock/>*/}
        <p className='text-2xl font-bold p-5'>리액트 기초 </p>
        <p className='text-4xl font-bold p-5'><GrHome /></p>
        
      </header>
      <main main className='w-full grow
                       flex flex-col items-center
                       overflow-y-scroll'>
               {/*<MyDiv1 >}*/}
               {/* <MyList/> */}
                {/*<Lotto/>*/ }
                {/*<FoodMain/>*/}
                {/* <MyClock/> */}
                <BoxOffice/>
      </main>
      <footer className='w-full h-20 flex justify-center items-center bg-black text-white'>
        <p>k-digital 8기 송소정</p>
      </footer>

    </div>
  );
}

export default App;
