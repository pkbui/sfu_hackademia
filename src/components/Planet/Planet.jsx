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
        // var yourImg = document.getElementById('yourImgId');
        //let imageSize = 100;
        let imageSize = this.props.Size;
        let planetName = this.props.planetName;
        if(this.state.clickedState){
            if(planetName != 'Sun') imageSize = 2*imageSize;
        }
        else{
            imageSize = this.props.Size;
            //imageSize = "100";
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
