import React, { Component } from "react";
import Product from "./product";

// Notic: products component(this), used product component to show somethings, products is parent and product is child <--comment

// If yU want to change something n parrent componnet follow below steps <--comment
// 1. Create a method or function in parent component than run your algoritm <--comment
// 2. Passing the method or function whit props to child component <--comment
// 3. Use method in the child component <--comment
class Products extends Component {
  state = {
    products: [
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
        name: "Third product",
        selected: 1,
      },
      {
        id: 4,
        image: "https://picsum.photos/200",
        name: "Forth product",
        selected: 6,
      },
    ],
  };
  productrender() {
    let elements = (
      <div className="col-12 text-center">
        <h1 className="h3">There is no product</h1>
      </div>
    );
    if (this.state.products.length > 0) {
      elements = this.state.products.map((item) => (
        // To passing parameter to component U most use props like below(it's like html attributes) <--comment
        <Product
          productId={item.id}
          productImage={item.image}
          productName={item.name}
          productSelected={item.selected}
          onDelete={this.handelDelete}
          incerement={this.incerement}
          decerement={this.decerement}
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
  handelDelete = (productId) => {
    // Get all records instance this id <--comment
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };

  incerement = (productId) => {
    // Recreate state.products <--comment
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].selected += 1;
    this.setState({ products: newProducts });
  };

  decerement = (productId) => {
    // Recreate state.products <--comment
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].selected -= 1;
    this.setState({ products: newProducts });
  };

  emptyCart = () => {
    const newCart = this.state.products.map((product) => {
      product.selected = 0;
      return product;
    });
    this.setState({ products: newCart });
    // Up code can not work because the seleted pased in the child state and was seted and you cant change it from here, So you most send all datas by props <--comment
    // Now the product component does not have any state and parent(products) have full control on thath(call this: `controlled component`) <--comment
    // And all the childe events most be control by parrent(incerement and decrement method most be here);
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 text-left my-2">
          <button onClick={this.emptyCart} className="btn btn-warning">
            Empty card
          </button>
        </div>
        {this.productrender()}
      </div>
    );
  }
}

export default Products;
