import React from "react";
import Avatar from "./avatar";

function Card(props) {
  console.log(props.image);
  return <div className="card">
    <h2>{props.name}</h2>
    <Avatar image={props.image} />
    <p>{props.tel} </p>
    <p>{props.email} </p>
  </div>
}

export default Card;