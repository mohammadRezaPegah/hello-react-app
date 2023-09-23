// Start class base component

import { Component } from "react"; // Import component class <--comment
import productImage from "../images/shop/product/s1.jpg"; // Import Image <--comment

class Product extends Component {
  // State is a key word and is the important thinks in react and you can use anything with tath. <--comment
  // Every thing that can change most be go in state, like count but somthing like name, do not need define in state. <--comment
  // V have 2 type of component: 1-stateless, 2- statefull <--comment
  // State is the componenet data and by cheging that you cang change the component <--comment
  // To change a parameter in state you most use this.setState() method that is in Component class <--comment
  // State can have any parameter, the below state is a prodct component state exam <--comment
  // To Use props(enteries value to the component) U most use `this.props.name`, Like below <--comment
  id = this.props.productId;
  image = this.props.productImage;
  name = this.props.productName;
  state = {};

  componentWillUnmount() {
    // starts after deleteing a component. <--comment
    // after did mount render and didmount are start again. <--comment
    // one of usage is when the product deleted U send a request to server to update database. <--comment
    console.log("Product - will unMount");
  }

  render() {
    let productsView = this.productGenerator();
    let element = <>{productsView}</>;
    return element;
  }

  productLen(varaible) {
    // In the JSX V can't use if statements like blow and for this usage V most calculate this in another method, but <--comment
    // also u can use inline condation in JSX instance condation in another method. <--comment
    if (isNaN(varaible)) {
      return 0;
    } else {
      if (varaible == null || varaible < 1) {
        return 0;
      } else {
        return varaible;
      }
    }
  }

  productGenerator() {
    // Convert products json to jsx code 4 usage <--comment
    let elements = (
      <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={this.id}>
        <div className="card">
          <img src={this.image} alt="prouct name" className="card-img-top" />
          <div className="card-body">
            <div className="col-12 text-center mt-4">
              <span className="h3">{this.name}</span>
            </div>
            <div className="col-12 text-center mt-4">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button
                    onClick={this.decrement}
                    className="btn btn-info w-100"
                  >
                    -
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                  <span className="">
                    {this.productLen(this.props.productSelected)}
                  </span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button
                    onClick={() => {
                      this.increment();
                    }}
                    className="btn btn-primary w-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button onClick={this.delete} className="btn btn-danger w-100">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return elements;
  }

  // For using event you most pass a method to event, and if you wanna use this in method you most write that as a arrow function like below. <--comment
  // also you can instance arrow function, bind this to method on use, like below exam code <--comment
  // Exam: <--comment
  // onClick="{this.incerement.bind(this)}" <--comment

  // For passing parameter to method on event you most use method in a other arrow function, like below exam <--comment
  // Exam: <--comment
  // onClick="{() => {this.increment(target value)}}" <--comment
  increment = () => {
    // How to change state? <--comment
    // const selected = this.props.productSelected; // This syntax is object distracturing <--comment
    // this.setState({ selected: selected + 1 });

    // controled by parent <--comment
    this.props.incerement(this.id);
  };
  decrement = () => {
    // this.setState({ selected: this.props.productSelected - 1 });

    // controled by parent <--comment
    this.props.decerement(this.id);
  };
  delete = () => {
    this.props.onDelete(this.id);
  };
}

export default Product;

// Start class base component
