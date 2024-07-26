import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    fetch(`https://vendorweb.onrender.com/vendor/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Product deleted successfully:", data);
        onDelete(product._id);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        // Consider adding user-facing error handling here, such as:
        // alert("Failed to delete product. Please try again.");
      });
  };

  return (
    <Link to={`/productdetails/${product._id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={product.images[0]} alt={product.productName} />
        </div>
        <div className="product-description">
          <h4>{product.productName}</h4>
          <p className="desc">{product.productDescription}</p>
        </div>
        <div className="button-close-container">
          <button className="price">₹{product.price}</button>
          <button className="close" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
