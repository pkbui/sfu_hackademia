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
        let imageSize = this.props.Size;
        let planetName = this.props.planetName;
        let planetDescription = this.props.planetDescription;
        if(this.state.clickedState){
            if(planetName !== 'Sun') imageSize = 2*imageSize;
        }
        else{
            imageSize = this.props.Size;
        }

        return (
        <div className={styles.planetPopup} >{this.state.clickedState ? <h1>{planetName}</h1> : ""}
            <img className={styles.spaceImage} src={this.props.imgURL} alt={this.props.planetName} onClick={this.testFunction} width={imageSize}></img>
            <p>{this.state.clickedState ? planetDescription : ""}</p> 
        </div>
        );
    }
}

export default Planet;
