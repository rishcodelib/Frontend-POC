import React from "react";

function Note(prop) {
  return (<div className="note">
    <h1> {prop.name}</h1>
    <p> {prop.description}</p>
  </div>)
}

export default Note;