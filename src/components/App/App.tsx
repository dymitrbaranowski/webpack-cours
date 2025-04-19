import React from "react";
import * as styles from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
import About from "@/pages/about/About"
import AvatarPng from "../assets/avatar.png";
import AvatarJpg from "../assets/avatar.jpg";
import Image from "../assets/calendar1.svg";

//TREE SHAKING

function TODO() {
  TODO2();
}
function TODO2() {
  throw new Error("TODO(242425)");
  // TODO(242425);
}

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => {
    // setCount((prev) => prev + 1)
    TODO();
    // TODO(242425);
  };
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  // TODO(242425);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  // if (__ENV__ === "development") {
  //   // addDevTools()
  // }

  return (
    <div data-testid={"App.DataTestId"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={AvatarPng} alt="Avatar" />
        <img width={100} height={100} src={AvatarJpg} alt="Avatar" />
      </div>
      <div>
        <Image color={"green"} width={150} height={150} />
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
       <About />
    </div>
  );
};
