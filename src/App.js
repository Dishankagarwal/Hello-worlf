import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Declare a state variable "count" and a function "setCount" to update it.
  const [count, setCount] = useState(0);

  // Function to increase the counter by 1
  const button = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>Counter: {count}</h1>
      {/* Button that calls increaseCounter function when clicked */}
      <button onClick={button}>button</button>
    </div>
  );
}

export default App;
