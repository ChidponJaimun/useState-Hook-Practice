import React, { useState } from "react";

function App() {
  let newTime = new Date().toLocaleTimeString([], { hour12: false });

  const [time, setTime] = useState(newTime);

  function timeRenew() {
    newTime = new Date().toLocaleTimeString([], { hour12: false });
    setTime(newTime);
  }
  setInterval(timeRenew, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeRenew}>Get Time</button>
    </div>
  );
}

export default App;
