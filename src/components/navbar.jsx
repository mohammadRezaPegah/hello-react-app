import React, { Component } from "react";

class Navbar extends Component {
  state = {};
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
    this.props.products.forEach((product) => {
      sum += product.selected;
    });
    return sum;
  };
}

export default Navbar;
