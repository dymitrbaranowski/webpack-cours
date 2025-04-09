import React from "react";
import * as styles from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
import About from "@/pages/about/About";

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <br />
      <Link to={"/"}>Home</Link>
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
      <About />
    </div>
  );
};
