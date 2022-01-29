import React, { useState } from 'react';

function ReactForms() {

  const [fName, setfName] = useState("")
  const [LName, setLname] = useState("")


  function updateFname(event) {
    const firstName = event.target.value;
    setfName(firstName);
  }

  function updateLname(event) {
    const LastName = event.target.value;
    setLname(LastName);
  }


  return <div>
    <div className='container'>
      <h1> Hello {fName} {LName}</h1>
      <form>
        <input name="fname" onChange={updateFname} value={fName} placeholder='FirstName' />
        <input name="fname" onChange={updateLname} value={LName} placeholder='LastName' />
        <button>Submit</button>
      </form>

    </div>

  </div>;
}

export default ReactForms;
