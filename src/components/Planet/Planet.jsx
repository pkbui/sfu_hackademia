import React from "react";
// import { Button } from 'element-react';
// import Zoom from 'react-img-zoom';
import styles from "./planet.module.css";

class Planet extends React.Component{
    testFunction(){
        this.setState({
            clickedState: !this.state.clickedState})
    }
    
    constructor(props){
        super(props);
        this.testFunction = this.testFunction.bind(this);
        this.state = {
            clickedState: false
        };
    }

    render() {
        console.log('render called');
        let imageSize;
        let planetName = this.props.planetName;
        if(this.state.clickedState){
            imageSize = "300";
        }
        else{
            imageSize = "50";
        }

        return (
        <h1>{this.state.clickedState ? "Planet name: " + planetName : ""}
            <img className={styles.spaceImage} src={this.props.imgURL} alt={this.props.planetName} onClick={this.testFunction} width={imageSize}></img>
            <p>{this.state.clickedState ? "Description: This is the planet " + planetName : ""}</p> 
        </h1>
        );
    }
}

export default Planet;
