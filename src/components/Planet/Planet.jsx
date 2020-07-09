import React from "react";
// import { Button } from 'element-react';
import styles from "./planet.module.css";

class Planet extends React.Component{
    render() {
        return (
        <h1> Planet name: {this.props.planetName}
            <img src={this.props.imgURL} alt={this.props.planetName} classname={styles.planetImage}></img>
            <p>Description: This is the sun, the center of our solar system</p> 
        </h1>
        );
    }
}

export default Planet;
