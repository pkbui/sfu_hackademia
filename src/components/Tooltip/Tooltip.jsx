import React from "react";

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
        var tipMessage = " ";
    }
}

export default ToolTip;