import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
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
        <button className="price">₹{product.price}</button>
      </div>
    </Link>
  );
};

export default ProductCard;
