import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  const btnClass={
    borderRadius:"1rem",
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Counter App</h1>
       <div style={{display:'flex'}}>

        <button className={btnClass} onClick={()=>{ setCount(count-1)}}>-</button>
      <span style={{padding:"1rem"}}>{count}</span>
        <button className={btnClass} onClick={()=>{ setCount(count+1)}}>+</button>
       </div>
      </header>
    </div>
  );
}

export default App;
