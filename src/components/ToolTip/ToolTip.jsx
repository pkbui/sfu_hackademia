import React from "react";
import "./tooltip.module.css";

class ToolTip extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        let tipMessage = this.props.planetMessage;
        return (
        <div style={tipMessage}>
            <p style={tipMessage} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.state.hover ? tipMessage : " "}</p>
        </div>
        );
    }
}

export default ToolTip;