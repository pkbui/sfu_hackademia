import React from "react";
// import { Button } from 'element-react';
import styles from "./main.module.css";
import Planet from "../Planet/Planet";

const Main = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-center mt-5 p-0">
        <img className={styles.spaceImage}  src="https://i.redd.it/9ktcyhlazfwx.png" alt="Solar system bodies relative distances"></img>
        <h3 className={styles.mainTitle} >Hello World, and Beyond! A look at our Solar System</h3>
        <div>
          <div className={styles.planetList}>
            <div className={styles.planet}><Planet imgURL="../../assets/sun.png" planetName="Sun" Size="" ></Planet></div>

            <div className={styles.plane, styles.mercury}><Planet imgURL="../../assets/mercury.png" planetName="Mercury" Size="38.3" ></Planet></div>
            <div className={styles.planet, styles.venus}><Planet imgURL="../../assets/venus.png" planetName="Venus" Size="94.9"></Planet></div>
            <div className={styles.planet, styles.earth}><Planet imgURL="../../assets/earth.png" planetName="Earth" Size="100"></Planet></div>
            <div className={styles.planet, styles.mars}><Planet imgURL="../../assets/mars.png" planetName="Mars" Size="53.2"></Planet></div>
          </div>
        </div>
      </div>
    </div>
  </main>;
}
export default Main;
