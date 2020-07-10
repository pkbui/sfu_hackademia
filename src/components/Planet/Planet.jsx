import React from "react";
// import { Button } from 'element-react';
import styles from "./planet.module.css";

let intervalId;

class Planet extends React.Component{
    toggleZoom(){
        this.setState({
            zoomed: !this.state.zoomed
        });
        if(this.props.planetName != "Sun"){
            intervalId = setInterval(() => this.modifyPlanetSize(), 50);
        }
    }

    modifyPlanetSize(){
        if(this.state.zoomed){
            //continue increase currentSize if size is still smaller than zoomedSize
            if(this.state.currentSize < this.state.zoomedSize){
                this.setState({
                    currentSize: this.state.currentSize * 1.1 });
            }
            else {
                this.setState({ currentSize: this.state.zoomedSize });
                clearInterval(intervalId);
            }
        }
        //if planet is not zoomed in anymore, restore to defaultSize
        else{
            this.setState({currentSize: this.state.defaultSize});
            clearInterval(intervalId);
        }
    }
    
    constructor(props){
        super(props);
        this.toggleZoom = this.toggleZoom.bind(this);
        this.state = {
            zoomed: false,
            defaultSize: this.props.Size,
            zoomedSize: this.props.Size * 3,
            currentSize: this.props.Size
        };
    }

    render() {
        let planetName = this.props.planetName;
        let planetDescription = this.props.planetDescription;
        return (
        <div className={styles.planetPopup}>{this.state.zoomed ? <h1>{planetName}</h1> : ""}
            <img className={styles.spaceImage} src={this.props.imgURL} alt={this.props.planetName} onClick={this.toggleZoom} width={this.state.currentSize}></img>
            <p>{this.state.zoomed ? planetDescription : ""} </p> 
        </div>
        );
    }
}

export default Planet;
