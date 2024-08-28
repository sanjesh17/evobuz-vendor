import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const ProductCard = ({ product, onDelete }) => {
  const token = Cookies.get("token");

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the Link from being triggered

    fetch(`https://evovendors.onrender.com/vendor/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
      });
  };

  const handleImageError = (e) => {
    e.target.src = "/path/to/fallback-image.jpg"; // Set a fallback image path
  };

  return (
    <div className="product-card">
      <Link to={`/productdetails/${product._id}`}>
        <div className="product-image">
          <img
            src={`https://evovendors.onrender.com/image/${product.images[0]}`}
            alt={product.productName}
            onError={handleImageError}
          />
        </div>
        <div className="product-description">
          <h4>{product.productName}</h4>
          <p className="desc">{product.productDescription}</p>
        </div>
      </Link>
      <div className="button-close-container">
        <button className="price">₹{product.price}</button>
        <button className="close" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
