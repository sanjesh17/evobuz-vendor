import React from "react";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="product-card">
        <div className="product-image">
          <img src="https://placehold.co/230x120" alt={product.product_name} />
        </div>
        <div className="product-description">
          <p className="bus-name">{product.Business_name}</p>
          <h4>{product.product_name}</h4>
          <p className="desc">{product.description}</p>
          <div className="price">₹{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
