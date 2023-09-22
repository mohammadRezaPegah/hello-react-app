import { useState } from "react";
import Product from "./product";
const Products = () => {
  const [products, setProduct] = useState([
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
        />
      ));
    }
    return elements;
  }
  return <div className="row">{productrender()}</div>;
};

export default Products;
