import React from "react";

function Entry(props) {
  return (
  <div className="term">
    <dt className="emoji">
      {props.emoji}
      <span> {props.name}</span>
    </dt>
    <dd>
      {props.description}
    </dd>
  </div>
  )
}

export default Entry;