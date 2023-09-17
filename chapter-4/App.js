import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Container from "./Components/Container";
// import Header from "./header";




const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Container/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); this waas react element
root.render(<AppLayout />); // this is react fun() component;
