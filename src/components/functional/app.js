import { Component } from "react"; // Component Class from react <--comment
import Products from "./products";
import Navbar from "./navbar";
import { useState } from "react";
// Start functional component
// You can use ES6 or based JS <--comment

// Navbar and products are brothers <--comment
const App = () => {
  const [products, setProducts] = useState([
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
  ]);

  function emptyCart() {
    const newCart = products.map((product) => {
      product.selected = 0;
      return product;
    });
    setProducts(newCart);
    // Up code can not work because the seleted pased in the child state and was seted and you cant change it from here, So you most send all datas by props <--comment
    // Now the product component does not have any state and parent(products) have full control on thath(call this: `controlled component`) <--comment
    // And all the childe events most be control by parrent(incerement and decrement method most be here);
  }
  function incerement(productId) {
    // Recreate state.products <--comment
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].selected += 1;
    setProducts(newProducts);
  }

  function decerement(productId) {
    // Recreate state.products <--comment
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].selected -= 1;
    setProducts(newProducts);
  }

  emptyCart = () => {
    const newCart = products.map((product) => {
      product.selected = 0;
      return product;
    });
    setProducts(newCart);
    // Up code can not work because the seleted pased in the child state and was seted and you cant change it from here, So you most send all datas by props <--comment
    // Now the product component does not have any state and parent(products) have full control on thath(call this: `controlled component`) <--comment
    // And all the childe events most be control by parrent(incerement and decrement method most be here);
  };
  function handelDelete(productId) {
    // Get all records instance this id <--comment
    const newProducts = products.filter((p) => p.id != productId);
    setProducts(newProducts);
  }

  let element = (
    <>
      <Navbar products={products} />
      <Products
        products={products}
        handelDelete={handelDelete}
        incerement={incerement}
        decerement={decerement}
        emptyCart={emptyCart}
      />
    </>
  );
  return element;
};
// End functional component

// Export any class to use in other files and components <--comment
export default App; // export as default class at the file
