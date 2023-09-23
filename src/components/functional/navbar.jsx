import React, { PureComponent } from "react";
import ProductContext from "../../context/product";
import { useContext } from "react";

const Navbar = (props) => {
  const productContext = useContext(ProductContext);
  function calculateSum() {
    let sum = 0;
    productContext.products.forEach((product) => {
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
