import logo from './logo.svg';
import './App.css';
import { Board } from './Board';
import { useEffect, useState } from 'react';

function App() {

  const [ca, setCa] = useState(true);
  const [count,setCount] = useState(0);

  // useEffect(()=>{
  //   setCa(!ca)
  // },[])

  


  return <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        
        <div className="game-info">
          <div>Count: {count}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </>


}

export default App;