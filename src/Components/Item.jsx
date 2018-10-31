import React, { Component } from "react";
class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <h2> Item </h2>
        <span className="badge badge-success m-2">{this.props.count}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.a);
          }}
          className="btn btn-warning m-1"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.a);
          }}
          className="btn btn-warning m-1"
        >
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Item;
