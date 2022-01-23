import React, { useState } from "react";

function App() {


  //destructuring Concept in ES6
  // 
  const rgb = [9, 132, 227];
  //
  const [red, green, blue] = [9, 132, 227]

  // in the above we de-structured the above rgb array into red,green,blue to easlily get values with 
  // red =9 , green =132 and blue = 227
  //

  const [count, setCount] = useState(0);
  console.log(red);

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }


  return (
    <div >
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
