import React, {useState} from "react";
import "./app.css";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

import ProductList from "./Components/ProductList/ProductList";

const App = () => {
  let[newProduct, updateProduct] = useState(null);

  const createProduct = (product) => {
   updateProduct(product);
  }

  return (
    <div>
      <CreateProduct createProduct= {createProduct} />
      <ProductList newProduct = {newProduct} />
    </div>
  );
};

export default App;
