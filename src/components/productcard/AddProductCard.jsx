// src/components/AddProductCard.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./productcard.css";

const AddProductCard = ({ onAddProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [productData, setProductData] = useState({
    product_name: "",
    Business_name: "",
    description: "",
    price: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products/", productData)
      .then((response) => {
        onAddProduct(response.data);
        setProductData({
          product_name: "",
          Business_name: "",
          description: "",
          price: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="card-container">
      <div className="product-card add-product-card" onClick={toggleForm}>
        {showForm && (
          <div className="form-popup" ref={formRef} onClick={handleFormClick}>
            <form onSubmit={handleSubmit}>
              <h2>Add New Product</h2>
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                value={productData.product_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="Business_name"
                placeholder="Business Name"
                value={productData.Business_name}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Product Description"
                value={productData.description}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={productData.price}
                onChange={handleChange}
                required
              />
              <button type="submit">Add Product</button>
            </form>
          </div>
        )}
        {!showForm && (
          <div className="add-product-icon">
            <span>+</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductCard;
