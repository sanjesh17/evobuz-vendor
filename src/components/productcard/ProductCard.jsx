import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/productdetails/${product.id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.product_name} />
        </div>
        <div className="product-description">
          <p className="bus-name">{product.Business_name}</p>
          <h4>{product.product_name}</h4>
          <p className="desc">{product.description}</p>
        </div>
        <button className="price">₹{product.price}</button>
      </div>
    </Link>
  );
};

export default ProductCard;
