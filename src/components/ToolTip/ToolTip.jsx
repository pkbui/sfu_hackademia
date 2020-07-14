import React from "react";

class ToolTip extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover(){
        this.setState({hover: !this.state.hover})
    }

    render(){
        let tipMessage = "";
        if(this.state.hover){
            tipMessage = this.props.planetMessage;
        }
        return (
        <p onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{tipMessage}</p>
        );
    }
}

export default ToolTip;