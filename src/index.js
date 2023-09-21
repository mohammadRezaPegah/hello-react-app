import React from "react"; // You also can do not import this module, it's will be import by compiler <--comment
import ReactDOM from "react-dom";
import App from "./app"; // Import personal component <--comment
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap css <--comment
import "./css/main.css"; // Import bootstrap css <--comment
import Product from "./components/product";

// Start use locale element(jsx) writed <--comment

// const element = <h1>Hello AI</h1>;
// ReactDOM.render(element, document.querySelector("#root"));

// End use locale element writed <--comment

// Start use component <--comment
let content = (
  <div className="container">
    <Product />
  </div>
);
ReactDOM.render(content, document.querySelector("#root"));
// End use component <--comment
