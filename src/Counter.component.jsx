import { useState } from "react";
const Counter = ({ number }) => {
  const [counter, setCounter] = useState(number);
  const changeCounter = (key) => {
    switch (key) {
      case "up":
        setCounter(counter + 1);
        break;
      case "down":
        setCounter(counter - 1);
        break;
      case "reset":
        setCounter(0);
        break;
      default:
        console.log("Invalid Key");
        break;
    }
  };
  return (
    <div>
      Counter
      <p>{counter}</p>
      <p>{counter % 3 === 0 ? "Boom!" : ""}</p>
      <button onClick={() => changeCounter("up")}>Click Up</button>
      <button onClick={() => changeCounter("down")}>Click Down</button>
      <button onClick={() => changeCounter("reset")}>Click Reset</button>
    </div>
  );
};
export default Counter;
