import React from "react";
import ReactDOM from "react-dom/client";
import { Square } from "./Square";

export class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            player:"X",
            squares: Array(9).fill(null),
            key:"X"
        };
    }

    restartNow = ()=>{
        console.log("Restart called.");
        this.setState({squares: Array(9).fill(null),});
      }

    togglePlayer = (i) => {
        let keynow = this.state.key;
        let squaresnow = this.state.squares;
        if(squaresnow[i] != null){
            return;
        }
        squaresnow[i]=keynow;
        this.setState({squares:squaresnow});
        this.state.player == "X" ? this.setState({player:"O", key:"O"}):this.setState({player:"X",key:"X"});
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return <>Winner is {squares[a]}</>
          }
        }
        return <>Continue...</>
    }

    renderSquare(i){
        return <>
        <Square keynow={this.state.squares[i]} value={i} togglePlayer = {this.togglePlayer}/>
        </>
    }

    render(){
        const status="Next Player: "+this.state.player;

        return<>
        <div className="status">{status}</div>
        <div children="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>

        <div children="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>

        <div children="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
        <div>
        {this.calculateWinner(this.state.squares)}
        </div>
        <div>
          <button onClick={()=>{this.restartNow()}}>Restart</button>
        </div>
        </>
    }
}