import { useState } from 'react';
import './App.css';

function App() {
 const [count, setCount]=useState(0);
 function add(){
  //setCount(count + 1);
  setCount(count => count + 1);
  setCount(count => count + 1);
  setCount(count => count + 1);
  setCount(count => count + 1);
 }
 function sub(){
  setCount(count-1);
 }
 function reset(){
  setCount(0);
 }
  return (
    <div className="App">
      <div className='box'>
          <p>{count}</p>
          <button onClick={add} className='add'>ADD</button>
          <button onClick={sub} className='sub'>SUB</button>
          <button onClick={reset} className='reset'>RESET</button>
      </div>
    </div>
  );
}

export default App;
