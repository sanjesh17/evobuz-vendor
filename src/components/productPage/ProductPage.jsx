import React, { useState } from "react";
import "./productpage.css";
import Cookies from "js-cookie";
import { Circles } from "react-loader-spinner"; 

const ProductAddedPopup = ({ productName, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="product-added-popup">
        <div className="popup-content">
          <svg
            className="checkmark-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="popup-text">{productName} added successfully!</p>
        </div>
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [loading, setLoading] = useState(false);

  const productCategories = {
    "Apparel and Accessories": [
      "Costumes",
      "Formal Wear",
      "Accessories",
      "Designer Dresses",
      "Shoes",
    ],
    "Gifts and Keepsakes": [
      "Personalized Gifts",
      "Souvenirs",
      "Gift Wrapping Supplies",
    ],
    Stationery: ["Invitations", "Thank You Cards", "Event Programs"],
    "Event Technology": [
      "AR/VR Equipment",
      "Event Management Software",
      "Ticketing Systems",
    ],
    "Health and Beauty": [
      "Skincare Products",
      "Makeup Products",
      "Hair Care Products",
    ],
    "Handloom and Artisan Products": [
      "Handloom Fabrics",
      "Handcrafted Decor",
      "Artisan Jewelry",
    ],
    "Bridal and Wedding": [
      "Bridal Dresses",
      "Bridesmaid Dresses",
      "Wedding Shoes",
      "Bridal Accessories",
    ],
    "Home and Living": ["Home Decor", "Kitchenware", "Furniture"],
    "Fashion and Clothing": ["Men's Wear", "Women's Wear", "Kids' Wear"],
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const renderPreview = () => {
    return (
      <div className="preview-container">
        {files.map((file, index) => {
          const fileURL = URL.createObjectURL(file);
          const fileType = file.type.split("/")[0]; 

          return (
            <div key={index} className="preview-item">
              {fileType === "image" ? (
                <img
                  src={fileURL}
                  alt={`Preview ${index}`}
                  className="product-image-preview"
                />
              ) : fileType === "video" ? (
                <video
                  controls
                  src={fileURL}
                  className="product-video-preview"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productName ||
      !productDescription ||
      !productCategory ||
      !productSubcategory ||
      !price ||
      stockAvailability < 0
    ) {
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

    files.forEach((file) => {
      formData.append("files", file);
    });

    const token = Cookies.get("token");

    setLoading(true);

    try {
      const response = await fetch(
        "https://evovendors.onrender.com/vendor/products",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

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
      setLoading(false);
    }
  };

  return (
    <div className={`product-page-container ${showPopup ? "blurred" : ""}`}>
      <h1 className="product-page-title">Add Product</h1>
      <svg
        className="header-slash"
        xmlns="http://www.w3.org/2000/svg"
        width="575"
        height="48"
        viewBox="0 0 575 48"
        fill="none"
      >
        <path
          d="M2 41C378 -20.5773 537.333 15.3428 570 41"
          stroke="#011EB6"
          strokeWidth="13"
        />
      </svg>
      <form className="product-form" onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="product-form-group">
          <label htmlFor="productName" className="product-label">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            className="product-input"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="productDescription" className="product-label">
            Product Description:
          </label>
          <textarea
            id="productDescription"
            className="product-textarea"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="productCategory" className="product-label">
            Product Category:
          </label>
          <select
            id="productCategory"
            className="product-select"
            value={productCategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
              setProductSubcategory("");
            }}
          >
            <option value="">Select Product Category</option>
            {Object.keys(productCategories).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {productCategory && (
          <div className="product-form-group">
            <label htmlFor="productSubcategory" className="product-label">
              Product Subcategory:
            </label>
            <select
              id="productSubcategory"
              className="product-select"
              value={productSubcategory}
              onChange={(e) => setProductSubcategory(e.target.value)}
            >
              <option value="">Select Product Subcategory</option>
              {productCategories[productCategory].map((subcategory, index) => (
                <option key={index} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="product-form-group">
          <label htmlFor="productPrice" className="product-label">
            Price:
          </label>
          <input
            type="number"
            id="productPrice"
            className="product-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="stockAvailability" className="product-label">
            Stock Availability:
          </label>
          <input
            type="number"
            id="stockAvailability"
            className="product-input"
            value={stockAvailability}
            onChange={(e) => setStockAvailability(e.target.value)}
            min="0"
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="productPolicies" className="product-label">
            Product Policies:
          </label>
          <textarea
            id="productPolicies"
            className="product-textarea"
            value={productPolicies}
            onChange={(e) => setProductPolicies(e.target.value)}
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="productFiles" className="product-label">
            Upload Files:
          </label>
          <input
            type="file"
            id="productFiles"
            className="product-input"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {/* Preview section */}
        {files.length > 0 && renderPreview()}

        <div className="product-form-group">
          <button type="submit" className="product-submit-button" disabled={loading}>
            {loading ? (
              <Circles
                height="30"
                width="30"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
                wrapperClass="product-spinner-loader"
              />
            ) : (
              "Add Product"
            )}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </form>

      {showPopup && (
        <ProductAddedPopup
          productName={productName}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
