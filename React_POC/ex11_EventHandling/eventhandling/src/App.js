import React, { useState } from 'react';

function App() {
  const [headingText, setHeadingText] = useState("Hello")
  const [isMouseOver, setMouseOver] = useState(false)

  function click() {
    setHeadingText("submited")
  }
  function hover() {
    setMouseOver(true);

  }
  function mout(){
    setMouseOver(false)
  }
  return (
    <div className="App">
      <h1> {headingText}</h1>
      <input type="text" placeholder='Name?' />
      <button onClick={click} style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={hover}
        onMouseOut={mout}
      >Submit</button>
    </div >
  );
}

export default App;
