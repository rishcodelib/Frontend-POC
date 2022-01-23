import React, { useState } from 'react';

function Time() {

  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime, 10000)

  return <div>
    <h1>{time}</h1>
    <button onClick={updateTime}> Get Time</button>
  </div>;
}

export default Time;
