import React from "react";
import ReactDOM from "react-dom";
//import { App } from "./App.jsx";
import Counter from "./Components/Counter";
import "bootstrap/dist/css/bootstrap.css";

const element = <h1> Hello Boy </h1>;
console.log(element);

ReactDOM.render(<Counter />, document.getElementById("root"));
