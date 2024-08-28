import React, { useState } from "react";
import "./productpage.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Circles } from 'react-loader-spinner'; // Import a loading spinner component

// Popup component for product added notification
const ProductAddedPopup = ({ productName, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="product-added-popup">
        <div className="popup-content">
          <svg className="checkmark-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="popup-text">{productName} added successfully!</p>
        </div>
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

// Main ProductPage component
const ProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubcategory, setProductSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockAvailability, setStockAvailability] = useState(0);
  const [productPolicies, setProductPolicies] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const productCategories = {
    "Apparel and Accessories": ["Costumes", "Formal Wear", "Accessories", "Designer Dresses", "Shoes"],
    "Gifts and Keepsakes": ["Personalized Gifts", "Souvenirs", "Gift Wrapping Supplies"],
    Stationery: ["Invitations", "Thank You Cards", "Event Programs"],
    "Event Technology": ["AR/VR Equipment", "Event Management Software", "Ticketing Systems"],
    "Health and Beauty": ["Skincare Products", "Makeup Products", "Hair Care Products"],
    "Handloom and Artisan Products": ["Handloom Fabrics", "Handcrafted Decor", "Artisan Jewelry"],
    "Bridal and Wedding": ["Bridal Dresses", "Bridesmaid Dresses", "Wedding Shoes", "Bridal Accessories"],
    "Home and Living": ["Home Decor", "Kitchenware", "Furniture"],
    "Fashion and Clothing": ["Men's Wear", "Women's Wear", "Kids' Wear"],
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productDescription || !productCategory || !productSubcategory || !price || stockAvailability < 0) {
      setError("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productCategory", productCategory);
    formData.append("productSubcategory", productSubcategory);
    formData.append("price", price);
    formData.append("stockAvailability", stockAvailability);
    formData.append("productPolicies", productPolicies);

    // Append files to FormData
    files.forEach((file) => {
      formData.append("files", file);
    });

    const token = Cookies.get("token");

    setLoading(true); // Show loading spinner

    try {
      const response = await fetch("https://evovendors.onrender.com/vendor/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setShowPopup(true);
        setProductName("");
        setProductDescription("");
        setProductCategory("");
        setProductSubcategory("");
        setPrice("");
        setStockAvailability(0);
        setProductPolicies("");
        setFiles([]);
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error inserting product:", error);
      setError("Internal server error");
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className={`product-page-container ${showPopup ? "blurred" : ""}`}>
      <h1 className="product-page-title">Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        {/* Form fields for product details */}
        <div className="product-form-group">
          <label htmlFor="productName" className="product-label">Product Name:</label>
          <input type="text" id="productName" className="product-input" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>

        <div className="product-form-group">
          <label htmlFor="productDescription" className="product-label">Product Description:</label>
          <textarea id="productDescription" className="product-textarea" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        </div>

        {/* Category and Subcategory selection */}
        <div className="product-form-group">
          <label htmlFor="productCategory" className="product-label">Product Category:</label>
          <select id="productCategory" className="product-select" value={productCategory} onChange={(e) => {
            setProductCategory(e.target.value);
            setProductSubcategory("");
          }}>
            <option value="">Select Product Category</option>
            {Object.keys(productCategories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {productCategory && (
          <div className="product-form-group">
            <label htmlFor="productSubcategory" className="product-label">Product Subcategory:</label>
            <select id="productSubcategory" className="product-select" value={productSubcategory} onChange={(e) => setProductSubcategory(e.target.value)}>
              <option value="">Select Product Subcategory</option>
              {productCategories[productCategory].map((subcategory, index) => (
                <option key={index} value={subcategory}>{subcategory}</option>
              ))}
            </select>
          </div>
        )}

        {/* Other form fields */}
        <div className="product-form-group">
          <label htmlFor="productPrice" className="product-label">Price:</label>
          <input type="number" id="productPrice" className="product-input" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="product-form-group">
          <label htmlFor="stockAvailability" className="product-label">Stock Availability:</label>
          <input type="number" id="stockAvailability" className="product-input" value={stockAvailability} onChange={(e) => setStockAvailability(e.target.value)} />
        </div>

        <div className="product-form-group">
          <label htmlFor="productPolicies" className="product-label">Product Policies:</label>
          <textarea id="productPolicies" className="product-textarea" value={productPolicies} onChange={(e) => setProductPolicies(e.target.value)} />
        </div>

        {/* File upload field */}
        <div className="product-form-group">
          <label htmlFor="productFiles" className="product-label">Upload Files:</label>
          <input type="file" id="productFiles" className="product-input" multiple onChange={handleFileChange} />
        </div>

        {/* Submit and error handling */}
        <div className="product-form-group">
          <button type="submit" className="product-submit-button">Add Product</button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </form>

      {/* Loading spinner */}
      {loading && (
        <div className="loading-overlay">
          <Circles height="80" width="80" color="#00BFFF" ariaLabel="circles-loading" />
        </div>
      )}

      {/* Popup for product added */}
      {showPopup && (
        <ProductAddedPopup
          productName={productName}
          onClose={() => {
            setShowPopup(false);
            navigate("/products"); // Redirect after closing popup
          }}
        />
      )}
    </div>
  );
};

export default ProductPage;
