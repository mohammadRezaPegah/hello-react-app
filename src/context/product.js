import { createContext } from "react";

const productContext = createContext({
  products: [],
  handelDelete: () => {},
  incerement: () => {},
  decerement: () => {},
  emptyCart: () => {},
});

export default productContext;
