import React from "react";
import { ProductList } from "./ProductList";
import './App.css'

const App = () => {
  const props = ProductList.find((element) => element);

  return (
    <div className="d-flex">
      <div className="left">
        <h1>{props.setup}</h1>
        <p>{props.punchline}</p>
      </div>
      <div className="right">
        <h1>{props.setup}</h1>
        <p>{props.punchline}</p>
      </div>
    </div>
  );
};

export default App;
