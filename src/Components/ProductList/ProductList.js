import { useState } from "react";
import Products from "./Products";

const products = [
  {
    pId: 1,
    pName: "Fresh Milk",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: true,
    image: "https://imockups.com/storage/product/75/kv1h3uH6TQ0UNyk0TFcC.png",
    price: "$15",
  },
  {
    pId: 2,
    pName: "Cottage Cheese",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: false,
    image:
      "https://assets.sainsburys-groceries.co.uk/gol/7753837/1/640x640.jpg",
    price: "$14",
  },
  {
    pId: 3,
    pName: "Broccoli",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: true,
    image:
      "https://mybigorder.com/public/uploads/products/photos/6rTUdxTr8w6loTFOaZy6VOJmrcJiE1iMUs1sVjRf.jpeg",
    price: "$12",
  },
  {
    pId: 4,
    pName: "Oranges",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: true,
    image: "https://cdn.cdnparenting.com/articles/2018/06/691064353-H.webp",
    price: "$10",
  },
  {
    pId: 5,
    pName: "Olive Oil",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: false,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kidgnm80-0/edible-oil/5/f/0/500-extra-virgin-glass-bottle-olive-oil-orgabite-original-imafy6kf2kpkebec.jpeg?q=70",
    price: "$24",
  },
  {
    pId: 6,
    pName: "Olive Oil Test ",
    desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    isAvailable: false,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kidgnm80-0/edible-oil/5/f/0/500-extra-virgin-glass-bottle-olive-oil-orgabite-original-imafy6kf2kpkebec.jpeg?q=70",
    price: "$24",
  },
];

const ProductList = (props) => {
  // console.log(props.newProduct);
  let[newProductList, updateProductList] = useState(products);
  updateProductList([props.newProduct, ...products])
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          {products.map((product) => {
           return <Products
              id={product.pId}
              name={product.pName}
              description={product.desc}
              isAvailable={product.isAvailable}
              imageUrl={product.image}
              price={product.price}
            ></Products>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
