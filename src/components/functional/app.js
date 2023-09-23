import { Component } from "react"; // Component Class from react <--comment
import Products from "./products";
import Navbar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";
// Start functional component
// You can use ES6 or based JS <--comment

import ProductContext from "../../context/product";

// Navbar and products are brothers <--comment
const App = () => {
  // Life sicle: In the functional componets for life sycle most use `useEffect` HOOK, and any where thath U need life sycle you most call `useEffect`. <--comment
  // useEffect: It's a function that get a functional value and on component Mount and Update will be called, Look at the below commented code. <--comment
  // useEffect(() => { //  <--comment
  //   console.log("App - Life sycle"); //  <--comment
  // }); //  <--comment

  // If U wanna call lify sycle just on component Mount, U most give a empty array, by second value to the useEffect HOOK <--comment
  // follow the commentd below codes. <--comment
  // useEffect(() => { //  <--comment
  //   console.log("App - Life sycle"); //  <--comment
  // }, []); //  <--comment

  // Also U can multiple useEffect in your component. <--comment

  // To use life sycle in unmount you most return another function in useEffect HOOK first value, follow the commented below codes. <--comment
  // useEffect(() => { //  <--comment
  //   return () => { //  <--comment
  //     console.log("App - unMount"); //  <--comment
  //   }; //  <--comment
  // }, []); //  <--comment

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

  // For passing data between parent and childs also you can use context that is so easy <--comment
  // How do taht? follow below steps <--commnet
  // 1. create a js file and import `createContext` from React. <--comment
  // 2. create a context as a const and export that. <--comment
  // 3. import context into the parent component and use that like below.

  // How use this into the childs? follow below steps
  // 1. import context into the Children <--comment
  // 2. import useContext from react <--comment
  // 3. define a cont equals to `useContext('context name')` <--comment
  // 4. Now you can use this const instance this.props <--comment

  let element = (
    <>
      <ProductContext.Provider
        value={{
          products: products,
          handelDelete: handelDelete,
          incerement: incerement,
          decerement: decerement,
          emptyCart: emptyCart,
        }}
      >
        <Navbar />
        <Products />
      </ProductContext.Provider>
    </>
  );
  return element;
};
// End functional component

// Export any class to use in other files and components <--comment
export default App; // export as default class at the file
