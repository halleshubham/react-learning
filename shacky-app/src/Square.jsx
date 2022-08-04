import React from "react";

export class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pointerEvents:"",
        };

    }

    setValueAndTogglePlayer(v){
        this.setState({pointerEvents:"none"});
        this.props.togglePlayer(v);
    }

    render(){
        return <>
        <button className="square" onClick={()=>{this.setValueAndTogglePlayer(this.props.value)}}>
        {this.props.keynow}
        </button>
        </>
    }
}