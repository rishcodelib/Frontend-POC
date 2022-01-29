import React, { useState } from 'react';

// Controller Components


function App() {
  const [name, setName] = useState("");
  const [headingText, setheading] = useState("")

  function click(event) {
    setheading(name)
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div div className="App" >
      <h1> Hello {headingText}</h1>
      <form onSubmit={click}>
        <input onChange={handleChange}
          type="text"
          placeholder='name?'
          value={name}
        />
        <button onClick={click}> Submit</button>
      </form>
    </div >
  );
}

export default App;
