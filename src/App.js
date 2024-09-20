import logo from './logo.svg';
import './App.css';
// import { IoAccessibilityOutline } from "react-icons/io5";
// import { IoAlarmSharp } from "react-icons/io5";
// import Hello from './01/Hello'
import MyClock from './02/MyClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <IoAccessibilityOutline /> */}
        {/* <Hello/> */}
        <MyClock/>
      </header>
    </div>
  );
}

export default App;
