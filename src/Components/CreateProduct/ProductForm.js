import React, { useState } from "react";

const ProductForm = () => {
  //  let[pName, updateName] = useState('');
  //  let[pPrice, updatePrice] = useState('');
  //  let[pDescription, updateDescription] = useState('');
  //  let[pAvailable, updateAvailability] = useState('');
  //  let[pImageUrl, updateImageUrl] = useState('');

  let [userInput, updateUserInput] = useState({
    pName: "",
    pPrice: "",
    pDescription: "",
    pAvailable: "",
    pImageUrl: "",
  });

  const nameInputHandler = (event) => {
    // updateName(event.target.value);
    updateUserInput({
      ...userInput,
      pName: event.target.value });
  };

  const priceInputHandler = (event) => {
    // updatePrice(event.target.value);
    updateUserInput({
      ...userInput,
      pPrice: event.target.value });
  };

  const descriptionInputHandler = (event) => {
    // updateDescription(event.target.value);
    updateUserInput({
      ...userInput,
      pDescription: event.target.value });
  };

  const availabilityInputHandler = (event) => {
    // updateAvailability(event.target.value);
    updateUserInput({
      ...userInput,
      pAvailability: event.target.value });
  };

  const imageInputHandler = (event) => {
    // updateImageUrl(event.target.value);
    updateUserInput({
      ...userInput,
      pImageUrl: event.target.value });
  };

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          onChange={descriptionInputHandler}
        />
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          onChange={availabilityInputHandler}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;