import React, { Component } from "react";
import Item from "./Item.jsx";

class Counter extends Component {
  state = {
    totalCount: 0,
    itemArray: [
      { id: 1, name: "item 1", count: 0 },
      { id: 2, name: "item 2", count: 0 },
      { id: 3, name: "item 3", count: 0 }
    ]
  };

  incrementNow = a => {
    console.log("increment clicked.", this.state);
    const itemArray = [...this.state.itemArray];
    const index = itemArray.indexOf(a);
    itemArray[index] = { ...a };
    itemArray[index].count++;
    this.setState({
      totalCount: this.state.totalCount + 1,
      itemArray: itemArray
    });
  };
  decrementNow = a => {
    console.log("decrement clicked.", this.state);
    const itemArray = [...this.state.itemArray];
    const index = itemArray.indexOf(a);
    itemArray[index] = { ...a };
    itemArray[index].count--;
    this.setState({
      totalCount: this.state.totalCount - 1,
      itemArray: itemArray
    });
  };
  resetNow = () => {
    console.log("Resetted", this.state);
    var itemArray = [...this.state.itemArray];
    itemArray.forEach(a => {
      a.count = 0;
    });
    this.setState({ totalCount: 0, itemArray });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="container col-md-4 lead">
            <h1>Hi there</h1>
            <h2>
              Count is{" "}
              <span className="badge badge-primary m-2">
                {this.state.totalCount}
              </span>
              <button onClick={this.resetNow} className="btn btn-warning">
                reset
              </button>
            </h2>
            {this.state.itemArray.map(a => (
              <Item
                a={a}
                key={a.id}
                count={a.count}
                onIncrement={this.incrementNow}
                onDecrement={this.decrementNow}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
