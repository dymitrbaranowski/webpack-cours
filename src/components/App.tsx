import React from "react";
import * as styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  return (
    <div>
      <h1 className={styles.value}>Count: {count}</h1>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <button className={styles.button} onClick={decrement}>
        Decrement
      </button>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
};
