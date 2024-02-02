import React, { useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);

  function addClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={addClick}/>
      <MyButton count={count} onClick={addClick}/>
    </div>
  );
}

export default CounterOne;

function MyButton({count, onClick}) {
  return (
    <>
      <hr />
      <h2>{count}</h2>
      <button onClick={onClick}>Click me</button>
      <hr />
    </>
  );
}
