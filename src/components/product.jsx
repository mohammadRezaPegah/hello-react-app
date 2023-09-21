// Start class base component

import { Component } from "react"; // Import component class <--comment
import productImage from "../images/shop/product/s1.jpg"; // Import Image <--comment

class Product extends Component {
  state = {};
  render() {
    let element = (
      <>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="card">
              <img
                src={productImage}
                alt="prouct name"
                className="card-img-top"
              />
              <div className="card-body">
                <div className="col-12 text-center mt-4">
                  <span className="h3">product name</span>
                </div>
                <div className="col-12 text-center mt-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <button className="btn btn-info w-100">-</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                      <span className="">2</span>
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
        </div>
      </>
    );
    return element;
  }
}

export default Product;

// Start class base component
