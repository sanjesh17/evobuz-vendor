import React, { useState } from "react";
import "./productpage.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies

const ProductAddedPopup = ({ productName, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="product-added-popup">
        <div className="popup-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

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

    const formData = {
      productName,
      productDescription,
      productCategory,
      productSubcategory,
      price,
      stockAvailability,
      productPolicies,
      images: imageFiles,
      videos: videoFiles,
    };

    const token = Cookies.get("token"); // Retrieve the token from cookies

    try {
      const response = await fetch(
        "https://evovendors.onrender.com/vendor/products", // Updated URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the authorization token
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Product inserted successfully:", data);
        setShowPopup(true);
        setProductName("");
        setProductDescription("");
        setProductCategory("");
        setProductSubcategory("");
        setPrice("");
        setStockAvailability(0);
        setProductPolicies("");
        setImageFiles([]);
        setVideoFiles([]);
        setImagePreviews([]);
        setVideoPreviews([]);
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error inserting product:", error);
      setError("Internal server error");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
    setImagePreviews((prevPreviews) => [
      ...prevPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    setVideoFiles((prevFiles) => [...prevFiles, ...files]);
    setVideoPreviews((prevPreviews) => [
      ...prevPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <div className={`product-page-container ${showPopup ? "blurred" : ""}`}>
      <h1>Add Product</h1>
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
            Price (₹):
          </label>
          <input
            type="number"
            id="productPrice"
            className="product-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            step="0.01"
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
            onChange={(e) => setStockAvailability(Number(e.target.value))}
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
          <label htmlFor="productImageUpload" className="product-label">
            Upload Images:
          </label>
          <input
            type="file"
            id="productImageUpload"
            className="product-file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="product-image-preview"
            />
          ))}
        </div>

        <div className="product-form-group">
          <label htmlFor="productVideoUpload" className="product-label">
            Upload Videos:
          </label>
          <input
            type="file"
            id="productVideoUpload"
            className="product-file"
            accept="video/*"
            multiple
            onChange={handleVideoChange}
          />
          {videoPreviews.map((videoPreview, index) => (
            <video key={index} controls className="product-video-preview">
              <source src={videoPreview} type={videoFiles[index]?.type} />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="submit-container">
          <button type="submit" className="product-button">
            Submit
          </button>
        </div>
      </form>
      {showPopup && (
        <ProductAddedPopup
          productName={productName}
          onClose={() => {
            navigate("/dashboard");
          }}
        />
      )}
    </div>
  );
};

export default ProductPage;
