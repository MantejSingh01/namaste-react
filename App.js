import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";

// const Parent = React.createElement(
//     'h1',
// { id: "parent" },
// React.createElement(
//     'div',
// { className: 'child' },
// React.createElement(
//     'h1',
//     { className: "heading"}, "hello react  hi")
//     )
// );
//React.createElement gives us JS object

// console.log(Parent);
// Tag in JSX(transpiled before it reaches the JS engine) - PARCEL is doing the transpiling
// Babel is doing the job whereas the Pael is like manager
// Babel is js compiler which takes our JS and convert ot transpile to browser js code.
// JSX => React.createElement => JS object => HTML Element

const Title = () => (
  <h1 className="head" tabIndex={1}>
    hello jsx 🚀
  </h1>
);
// const number = 1000;
// const title = <img src="x" onError={window.alert(document.cookies)}/>
// React Components
// Class based Components - Old way
// Functional Components - New way

// fun() return reactElement is a functional component

const HeadingComponenet = () => (
  <>
    <Header />
    <div id="container">
  
      <h1 className="heading">Functional Components </h1>
      <Title />
    </div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); this waas react element
root.render(<HeadingComponenet />); // this is react fun() component;
