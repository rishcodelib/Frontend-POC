import React, { useState } from 'react';

function ReactForms() {

  // const [fName, setfName] = useState("")
  // const [LName, setLname] = useState("")

  // function updateFname(event) {
  //   const firstName = event.target.value;
  //   setfName(firstName);
  // }

  // function updateLname(event) {
  //   const LastName = event.target.value;
  //   setLname(LastName);
  // }


  // we are setting fullName to a new object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })

  function handleChange(event) {
    // const newVal = event.target.value; //input value= ""
    // const inputName = event.target.name; // taking fome the input type = "" 

    //or 
    //try this and change inputName to name and newVal to value
    const { value, name } = event.target


    setFullName(prevValue => {

      if (name === "fname") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      }
      else if (name === 'lname') {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }

    })

    // if (inputName === "fname") {
    //   return setFullName({ fName: newVal })
    // }
    // else if (inputName === 'lname') {
    //   setFullName({ fName: newVal });
    // }


    // console.log(newVal);
    // console.log(inputName);

  }



  return (<div>
    <div className='container'>
      {/* <h1> Hello {fName} {LName}</h1> */}
      <h1> Hello {fullName.fName} {fullName.lName}</h1>
      <form>

        {/* <input name="fname" onChange={updateFname} value={fName} placeholder='FirstName' />
        <input name="fname" onChange={updateLname} value={LName} placeholder='LastName' /> */}

        <input name="fname" onChange={handleChange}
          // value={fullName.fName} 
          placeholder='FirstName' />
        <input name="lname" onChange={handleChange}
          // value={fullName.lName} 
          placeholder='LastName' />
        <button>Submit</button>
      </form>

    </div>

  </div>);
}

export default ReactForms;
