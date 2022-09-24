import React from "react";
import "./app.css";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

import ProductList from "./Components/ProductList/ProductList";

const App = () => {
  return (
    <div>
      <CreateProduct />
      <ProductList />
    </div>
  );
};

export default App;
