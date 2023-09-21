import { Component } from "react"; // Component Class from react <--comment

// Start class base component

// class App extends Component {
//   // Every component class must be a child of Component Class(extend that)
//   render() {
//     // Notic: react component never can't return to elements to getter, so you most put all elements in a <div> and <--comment
//     //        return the single div is included al elements, look at the below example <--comment

//     // Notic: also you can use react fragment (<></>) instend the <div> tag for returning data <--comment
//     // The nitic of top line is the react fragment is not load in the browser source code but the div is loaded <--comment
//     let element = (
//       <>
//         <h1>Hellow Amin!</h1>
//         <h2>Your not hacked...</h2>
//       </>
//     );
//     return element;
//   }
// }

// End class base component

// Start functional component
// You can use ES6 or based JS <--comment
const App = () => {
  let element = (
    <>
      <h1>Hellow Amin!</h1>
      <h2>Your not hacked...</h2>
    </>
  );
  return element;
};
// End functional component

// Export any class to use in other files and components <--comment
export default App; // export as default class at the file
