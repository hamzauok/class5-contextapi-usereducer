import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent() {
  return (
    <div>
      <Child />
      <br />
      <hr />
      <Child2 />
    </div>
  );
}

export default Parent;
