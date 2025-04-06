import React from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
