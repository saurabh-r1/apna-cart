import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addItem function with the product name and price
    addItem(productName, productPrice);

    // Clear the form inputs
    setProductName("");
    setProductPrice(0);
  };

  return (
    <form className="row mb-5" onSubmit={handleSubmit}>
      <div className="mb-3 col-4">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="name"
          name="productName"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          name="productPrice"
          onChange={(e) => setProductPrice(parseFloat(e.target.value))}
          value={productPrice}
        />
      </div>
      <button type="submit" className="btn btn-primary col-4">
        Add
      </button>
    </form>
  );
};

export default AddItem;
