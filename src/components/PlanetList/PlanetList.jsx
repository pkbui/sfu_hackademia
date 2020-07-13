import React from "react";
// import { Button } from 'element-react';
import styles from "./planetlist.module.css";
//import "../ToolTip/ToolTip";
import Planet from "../Planet/Planet"
import ToolTip from "../ToolTip/ToolTip";

class PlanetList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
          <div className={styles.planetList}>
            <div className={styles.planet}>
                <Planet imgURL="../../assets/sun.png" planetName="Sun" planetDescription="With a diameter 109 times as large as earth, we could not convey the sheer immensity of the sun on this page. Dense enough to sustain the fusion of hydrogen into helium, the sun is endlessly energetic." Size="" planetMessage = "Click on me to learn some fun facts. Click again to exit. Or, keep scrolling!"></Planet>
                <ToolTip></ToolTip>
                </div>
            <div className={styles.planet, styles.mercury}>
                <Planet imgURL="../../assets/mercury.png" planetName="Mercury" planetDescription="The first planet, orbits nearly in sync with the sun, meaning one side is always scorching hot and the other icy cold" Size="38.3" planetMessage=""></Planet>
                </div>
            <div className={styles.planet, styles.venus}>
                <Planet imgURL="../../assets/venus.png" planetName="Venus" planetDescription="The second planet, with toxic greenhouse gases and acid rain, Venus is only beautiful from a distance." Size="94.9" planetMessage=""></Planet>
                </div>
            <div className={styles.planet, styles.earth}>
                <Planet imgURL="../../assets/earth.png" planetName="Earth" planetDescription="Home Sweet home. Hello, world!" Size="100" planetMessage=""></Planet>
                </div>
            <div className={styles.planet, styles.mars}>
                <Planet imgURL="../../assets/mars.png" planetName="Mars" planetDescription="The red planet, Mars is known for being our best bet for interplanetery travel, with missions to visit already in the works." Size="53.2" planetMessage=""></Planet>
                </div>
          </div>
        </div> );
    }
}

export default PlanetList;
