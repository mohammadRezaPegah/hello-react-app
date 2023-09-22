// Start class base component

import { Component } from "react"; // Component Class from react <--comment
import Products from "./components/products";
import Navbar from "./components/navbar";
class App extends Component {
  // Every component class must be a child of Component Class(extend that)
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
  render() {
    // Notic: react component never can't return to elements to getter, so you most put all elements in a <div> and <--comment
    //        return the single div is included al elements, look at the below example <--comment

    // Notic: also you can use react fragment (<></>) instend the <div> tag for returning data <--comment
    // The nitic of top line is the react fragment is not load in the browser source code but the div is loaded <--comment

    // Navbar and products are brothers <--comment

    let element = (
      <>
        <Navbar products={this.state.products} />
        <Products
          products={this.state.products}
          handelDelete={this.handelDelete}
          incerement={this.incerement}
          decerement={this.decerement}
          emptyCart={this.emptyCart}
        />
      </>
    );
    return element;
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
}

// End class base component
