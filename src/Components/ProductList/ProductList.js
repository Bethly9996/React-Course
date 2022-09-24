import Products from "./Products";

const products = [
    {
      pId: 1,
      pName: "Fresh Milk",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      isAvailable: true,
      image: "https://imockups.com/storage/product/75/kv1h3uH6TQ0UNyk0TFcC.png",
      price: '$15',
    },
    {
      pId: 2,
      pName: "Cottage Cheese",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      isAvailable: false,
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/7753837/1/640x640.jpg",
      price: '$14',
    },
    {
      pId: 3,
      pName: "Broccoli",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      isAvailable: true,
      image:
        "https://mybigorder.com/public/uploads/products/photos/6rTUdxTr8w6loTFOaZy6VOJmrcJiE1iMUs1sVjRf.jpeg",
      price: '$12',
    },
    {
      pId: 4,
      pName: "Oranges",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      isAvailable: true,
      image:
        "https://cdn.cdnparenting.com/articles/2018/06/691064353-H.webp",
      price: '$10',
    },
    {
      pId: 5,
      pName: "Olive Oil",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      isAvailable: false,
      image:
        "https://rukminim1.flixcart.com/image/416/416/kidgnm80-0/edible-oil/5/f/0/500-extra-virgin-glass-bottle-olive-oil-orgabite-original-imafy6kf2kpkebec.jpeg?q=70",
      price: '$24',
    },
  ];
  
  function App() {
    return (
      <div className="row">
        <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          <Products
            id={products[0].pId}
            name={products[0].pName}
            description={products[0].desc}
            isAvailable={products[0].isAvailable}
            imageUrl={products[0].image}
            price={products[0].price}
          ></Products>{" "}
          <Products
            id={products[1].pId}
            name={products[1].pName}
            description={products[1].desc}
            isAvailable={products[1].isAvailable}
            imageUrl={products[1].image}
            price={products[1].price}
          ></Products>
          <Products
            id={products[2].pId}
            name={products[2].pName}
            description={products[2].desc}
            isAvailable={products[2].isAvailable}
            imageUrl={products[2].image}
            price={products[2].price}
          ></Products>
          <Products
            id={products[3].pId}
            name={products[3].pName}
            description={products[3].desc}
            isAvailable={products[3].isAvailable}
            imageUrl={products[3].image}
            price={products[3].price}
          ></Products>
          <Products
            id={products[4].pId}
            name={products[4].pName}
            description={products[4].desc}
            isAvailable={products[4].isAvailable}
            imageUrl={products[4].image}
            price={products[4].price}
          ></Products>
          </ul>
        </div>
      </div>
    );
  }

const ProductList = () => {
    return (
        <div className="row">
        <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          <Products
            id={products[0].pId}
            name={products[0].pName}
            description={products[0].desc}
            isAvailable={products[0].isAvailable}
            imageUrl={products[0].image}
            price={products[0].price}
          ></Products>{" "}
          <Products
            id={products[1].pId}
            name={products[1].pName}
            description={products[1].desc}
            isAvailable={products[1].isAvailable}
            imageUrl={products[1].image}
            price={products[1].price}
          ></Products>
          <Products
            id={products[2].pId}
            name={products[2].pName}
            description={products[2].desc}
            isAvailable={products[2].isAvailable}
            imageUrl={products[2].image}
            price={products[2].price}
          ></Products>
          <Products
            id={products[3].pId}
            name={products[3].pName}
            description={products[3].desc}
            isAvailable={products[3].isAvailable}
            imageUrl={products[3].image}
            price={products[3].price}
          ></Products>
          <Products
            id={products[4].pId}
            name={products[4].pName}
            description={products[4].desc}
            isAvailable={products[4].isAvailable}
            imageUrl={products[4].image}
            price={products[4].price}
          ></Products>
          </ul>
        </div>
      </div>
    )
};

export default ProductList;