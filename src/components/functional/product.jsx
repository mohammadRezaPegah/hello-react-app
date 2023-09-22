// In functional component V have not state and U most use HOOK <--comment
// Even U can't use `this` magic key word. Exam: you can't use this exam: this.item <--comment
// In functoinal component you can have many deference states
import { Children, useState } from "react"; // Import state hook <--comment

// To using props in functional component, U most pass the `props` magic keyword to the fuction, like below <--comment
const Product = (props) => {
  // How to define state? <--comment
  // The first varaible is state name and the second varaible is state changer <--comment
  const [selected, setSelected] = useState(props.productSelected);
  const datas = [
    props.productId,
    props.productImage,
    props.productName,
    props.onDelete,
  ];
  const [id, image, name, onDelete] = datas;
  const productsView = productGenerator();
  function productLen(varaible) {
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
  function productGenerator() {
    // Convert products json to jsx code 4 usage <--comment
    let elements = (
      <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={id}>
        <div className="card">
          <img src={image} alt="prouct name" className="card-img-top" />
          <div className="card-body">
            <div className="col-12 text-center mt-4">
              <span className="h3">{name}</span>
            </div>
            <div className="col-12 text-center mt-4">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button onClick={decrement} className="btn btn-info w-100">
                    -
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                  <span className="">{productLen(props.productSelected)}</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <button
                    onClick={() => {
                      increment();
                    }}
                    className="btn btn-primary w-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button onClick={deleteElement} className="btn btn-danger w-100">
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
  function increment() {
    // How to change state? <--comment

    // setSelected(props.productSelected + 1);
    props.incerement(id);
  }
  function decrement() {
    // setSelected(props.productSelected - 1);
    props.decerement(id);
  }
  function deleteElement() {
    onDelete(id);
  }
  return productsView;
};

// If the functions was outside the component you most pass the needls to that, like below <--comment

export default Product;
