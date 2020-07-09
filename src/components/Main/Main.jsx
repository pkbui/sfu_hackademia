import React from "react";
// import { Button } from 'element-react';
import styles from "./main.module.css";
import Planet from "../Planet/Planet";

const Main = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-center mt-5 p-0">
        <img className={styles.spaceImage}  src="https://i.redd.it/9ktcyhlazfwx.png" alt="Solar system bodies relative distances"></img>
        <div>
          <h3>Hello World, and Beyond! A look at our Solar System</h3>
          <Planet imgURL="../../assets/sun.png"></Planet>
        </div>
      </div>
    </div>
  </main>;
}
export default Main;
