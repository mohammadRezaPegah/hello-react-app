import { useState } from "react";
import Product from "./product";
const Products = () => {
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

  function handelDelete(productId) {
    // Get all records instance this id <--comment
    const newProducts = products.filter((p) => p.id != productId);
    setProducts(newProducts);
  }

  function productrender() {
    let elements = (
      <div className="col-12 text-center">
        <h1 className="h3">There is no product</h1>
      </div>
    );
    if (products.length > 0) {
      elements = products.map((item) => (
        // To passing parameter to component U most use props like below(it's like html attributes) <--comment
        <Product
          productId={item.id}
          productImage={item.image}
          productName={item.name}
          productSelected={item.selected}
          onDelete={handelDelete}
          incerement={incerement}
          decerement={decerement}
        >
          hello
        </Product>

        // Also you can use componnt tag exactly like html and whith usage you can add value to childeren props <--comment
        // Exam:
        // <Product>
        // here you can pass your value (like `hello`) and in the component with below key word can use that. <--comment
        // {props.children}
        //</Product>
      ));
    }
    return elements;
  }

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

  return (
    <div className="row">
      <div className="col-12 text-left my-2">
        <button onClick={emptyCart} className="btn btn-warning">
          Empty card
        </button>
      </div>
      {productrender()}
    </div>
  );
};

export default Products;
