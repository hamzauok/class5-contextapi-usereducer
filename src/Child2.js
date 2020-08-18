import React, { useReducer } from "react";

import CounterReducers from "./CounterReducer";

function Child2() {
  let [state, dispatch] = useReducer(CounterReducers, 1);

  return (
    <div className="child2">
      <h1>useReducer</h1>
      <h4>Counter value is : {state}</h4>

      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Child2;
