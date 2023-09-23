// Start class base component

import { Children, Component } from "react"; // Component Class from react <--comment
import Products from "./components/products";
import Navbar from "./components/navbar";
import ProductContext from "./context/product";
class App extends Component {
  // Mount: <--comment
  // Mount is the componet life sicle that includes: mount(component creation), update(update component(like change selected)), unmount(delete component)
  // mont includes: constructor, render, didMounted <--comment
  // update includes: render, didUpdate <--comment
  // unmount includes: component will unmount <--comment
  // Mount statrts with constructor method. <--comment
  // To use constructor in that you most call super() from Component, else the contructor does not work. <--comment
  // Constructor with default havn't access to props, for using props you most pass this to constructor as a value and also pass this to super ass a value. <--comment
  // After render call the childrens constructor and render will be call, before didMount. <--comment

  // Mount starts on component call. <--comment
  // Mount sicle: 1. construtor, 2. render, 3 didMount

  // Update starts on component change. <--commnet
  // Update sicle: 1. render, 2. didUpdate <--comment
  constructor(props) {
    // With constructor U can use for assign value to properties, for exam you can define state here but U can't use set state. <--comment
    super(props);
  }

  componentDidUpdate() {
    // starts after component change and render method. <--comment
    console.log("App - did update");
  }

  componentWillUnmount() {
    // starts after deleteing a component. <--comment
    // after did mount render and didmount are start again. <--comment
    // one of usage is when the product deleted U send a request to server to update database. <--comment
    console.log("App - will unMount");
  }
  componentDidMount() {
    // With didMount you can do some thing like send request to back end and update the information after render. <--commnet
  }

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
    console.log("App - render");
    // Notic: react component never can't return to elements to getter, so you most put all elements in a <div> and <--comment
    //        return the single div is included al elements, look at the below example <--comment

    // Notic: also you can use react fragment (<></>) instend the <div> tag for returning data <--comment
    // The nitic of top line is the react fragment is not load in the browser source code but the div is loaded <--comment

    // Navbar and products are brothers <--comment

    // For passing data between parent and childs also you can use context that is so easy <--comment
    // How do taht? follow below steps <--commnet
    // 1. create a js file and import `createContext` from React. <--comment
    // 2. create a context as a const and export that. <--comment
    // 3. import context into the parent component and use that like below.

    // How use this into the childs? follow below steps
    // 1. import context into the Children <--comment
    // 2. into the class base define `contextType` as a static (static contextType). <--comment
    // 3. Now tou can use this.context instence this.props <--comment
    let element = (
      <>
        <ProductContext.Provider
          value={{
            products: this.state.products,
            handelDelete: this.handelDelete,
            incerement: this.incerement,
            decerement: this.decerement,
            emptyCart: this.emptyCart,
          }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
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

export default App;
// End class base component
