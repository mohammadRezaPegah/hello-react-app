import React, { Component } from "react";
import Product from "./product";
import ProductContext from "../context/product";

// Notic: products component(this), used product component to show somethings, products is parent and product is child <--comment

// If yU want to change something n parrent componnet follow below steps <--comment
// 1. Create a method or function in parent component than run your algoritm <--comment
// 2. Passing the method or function whit props to child component <--comment
// 3. Use method in the child component <--comment
class Products extends Component {
  static contextType = ProductContext;
  productrender() {
    let elements = (
      <div className="col-12 text-center">
        <h1 className="h3">There is no product</h1>
      </div>
    );
    if (this.context.products.length > 0) {
      elements = this.context.products.map((item) => (
        // To passing parameter to component U most use props like below(it's like html attributes) <--comment
        <Product
          productId={item.id}
          productImage={item.image}
          productName={item.name}
          productSelected={item.selected}
          onDelete={this.context.handelDelete}
          incerement={this.context.incerement}
          decerement={this.context.decerement}
        />

        // Also you can use componnt tag exactly like html and whith usage you can add value to childeren props <--comment
        // Exam:
        // <Product>
        // here you can pass your value (like `hello`) and in the component with below key word can use that. <--comment
        // {this.props.children}
        //</Product>
      ));
    }
    return elements;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 text-left my-2">
          <button onClick={this.context.emptyCart} className="btn btn-warning">
            Empty card
          </button>
        </div>
        {this.productrender()}
      </div>
    );
  }
}

export default Products;
