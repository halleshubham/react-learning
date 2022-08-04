import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value,setValue] = useState(0);

  const handleMinus = () => {
    setValue(value - 1);
  }

  const handlePlus = () => {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <h1>Example of how useState hook can be used.</h1>
      <p><button onClick={handleMinus}> - </button>
       <span> {value} </span>
      <button onClick={handlePlus}> + </button></p>
    </div>
  );
}

export default App;
