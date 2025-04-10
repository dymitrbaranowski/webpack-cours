import React from "react";
import * as styles from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
// import About from "@/pages/about/About";
import AvatarPng from "@/assets/avatar.png";
import AvatarJpg from "@/assets/avatar.jpg";
import calendar from "@/assets/calendar.svg";

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  return (
    <div>
      <div>
        <img width={100} height={100} src={AvatarPng} alt="Avatar" />
        <img width={100} height={100} src={AvatarJpg} alt="Avatar" />
        <img width={100} height={100} src={calendar} alt="calendar" />
      </div>
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
      <Outlet />
    </div>
  );
};
