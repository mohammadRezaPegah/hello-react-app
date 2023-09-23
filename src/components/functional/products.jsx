import { useState } from "react";
import Product from "./product";
import ProductContext from "../../context/product";
import { useContext } from "react";
const Products = (props) => {
  const productContext = useContext(ProductContext);
  function productrender() {
    let elements = (
      <div className="col-12 text-center">
        <h1 className="h3">There is no product</h1>
      </div>
    );
    if (productContext.products.length > 0) {
      elements = productContext.products.map((item) => (
        // To passing parameter to component U most use props like below(it's like html attributes) <--comment
        <Product
          productId={item.id}
          productImage={item.image}
          productName={item.name}
          productSelected={item.selected}
          onDelete={productContext.handelDelete}
          incerement={productContext.incerement}
          decerement={productContext.decerement}
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

  return (
    <div className="row">
      <div className="col-12 text-left my-2">
        <button onClick={productContext.emptyCart} className="btn btn-warning">
          Empty card
        </button>
      </div>
      {productrender()}
    </div>
  );
};

export default Products;
