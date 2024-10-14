import React, { useState } from "react";
import "./App.css";
import App from "./App";

const Counter = () => {
  // Initialize state using useState hook
  const [count, setCount] = useState(5);

  // Handlers to increase and decrease the count
  const handleDec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Calculate the date
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={handleDec}>-</button>
      <span>
        {date.toDateString()} [{count}]
      </span>
      <button onClick={handleInc}>+</button>
    </div>
  );
};

export default Counter;
