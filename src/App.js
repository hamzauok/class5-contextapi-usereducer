import React, { useState } from "react";
import Parent from "./Parent";
import CounterContext from "./CounterContext";
import "./App.css";

function App() {
  let countState = useState(1);
  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
