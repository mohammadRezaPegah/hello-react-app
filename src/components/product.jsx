// Start class base component

import { Component } from "react"; // Import component class <--comment
import productImage from "../images/shop/product/s1.jpg"; // Import Image <--comment

class Product extends Component {
  state = {};
  render() {
    const products = [
      {
        id: 1,
        image: productImage,
        name: "First product",
        selected: 2,
      },
      {
        id: 2,
        image: productImage,
        name: "Second product",
        selected: 3,
      },
      {
        id: 3,
        image: productImage,
        name: "Thirth product",
        selected: 5,
      },
      {
        id: 4,
        image: productImage,
        name: "Forth product",
        selected: 1,
      },
    ];
    let productsView = products.map((item) => (
      <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item.id}>
        <div className="card">
          <img src={item.image} alt="prouct name" className="card-img-top" />
          <div className="card-body">
            <div className="col-12 text-center mt-4">
              <span className="h3">{item.name}</span>
            </div>
            <div className="col-12 text-center mt-4">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button className="btn btn-info w-100">-</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                  <span className="">{item.selected}</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button className="btn btn-primary w-100">+</button>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button className="btn btn-danger w-100">delete</button>
            </div>
          </div>
        </div>
      </div>
    ));
    let element = (
      <>
        <div className="row">{productsView}</div>
      </>
    );
    return element;
  }
}

export default Product;

// Start class base component
