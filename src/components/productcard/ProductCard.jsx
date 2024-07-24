import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to="/productdetails">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-description">
          <h4>{product.name}</h4>
          <p className="bus-name">{product.businessName}</p>
          <p className="desc">{product.description}</p>
        </div>
        <button className="price">${product.price}</button>
      </div>
    </Link>
  );
};

export default ProductCard;
