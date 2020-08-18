import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function Child() {
  let counterValue = useContext(CounterContext);
  console.log(counterValue);

  return (
    <div className="child1">
      <h1>Context API</h1>
      <h4>Counter value is : {counterValue[0]} </h4>

      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          counterValue[1](--counterValue[0]);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Child;
