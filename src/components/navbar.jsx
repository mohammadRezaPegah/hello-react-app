import React, { Component } from "react";
import ProductContext from "../context/product";

class Navbar extends Component {
  state = {};
  static contextType = ProductContext;
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-primary rounded-bottom">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              Navbar {this.calculateSum()}
            </a>
          </div>
        </nav>
      </>
    );
  }

  calculateSum = () => {
    let sum = 0;
    this.context.products.forEach((product) => {
      sum += product.selected;
    });
    return sum;
  };
}

export default Navbar;
