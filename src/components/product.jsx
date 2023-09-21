// Start class base component

import { Component } from "react"; // Import component class <--comment
import productImage from "../images/shop/product/s1.jpg"; // Import Image <--comment

class Product extends Component {
  state = {};
  products = [
    // Using json for products list <--comment
    {
      id: 1,
      image: "https://picsum.photos/200",
      name: "First product",
      selected: 2,
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      name: "Second product",
      selected: 3,
    },
    {
      id: 3,
      image: "https://picsum.photos/200",
      name: "Thirth product",
      selected: 5,
    },
    {
      id: 4,
      image: "https://picsum.photos/200",
      name: "Forth product",
      selected: null,
    },
  ];
  render() {
    let productsView = this.productGenerator();
    let element = (
      <>
        <div className="row">{productsView}</div>
      </>
    );
    return element;
  }

  productLen(varaible) {
    // In the JSX V can't use if statements like blow and for this usage V most calculate this in another method, but <--comment
    // also u can use inline condation in JSX instance condation in another method. <--comment
    if (isNaN(varaible)) {
      return 0;
    } else {
      if (varaible == null || varaible < 1) {
        return 0;
      } else {
        return varaible;
      }
    }
  }

  productGenerator() {
    // Convert products json to jsx code 4 usage <--comment
    let elements = (
      <div className="col-lg-12 text-center">
        <p className="h1">There is no product!</p>
      </div>
    );
    if (this.products.length > 0) {
      elements = this.products.map((item) => (
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
                    <span className="">{this.productLen(item.selected)}</span>
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
    }

    return elements;
  }
}

export default Product;

// Start class base component
