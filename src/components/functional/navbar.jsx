import React, { PureComponent } from "react";

const Navbar = (props) => {
  function calculateSum() {
    let sum = 0;
    props.products.forEach((product) => {
      sum += product.selected;
    });
    return sum;
  }
  return (
    <>
      <nav className="navbar navbar-light bg-primary rounded-bottom">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar {calculateSum()}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
