import React from "react";
import ProductCard from "./ProductCard";
import "./productcard.css";

const ProductList = () => {
  // Sample data
  const sampleProducts = [
    {
      id: 1,
      name: "Smartphone X",
      description: "Latest model with advanced features",
      price: 799.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Laptop Pro",
      description: "High-performance laptop for professionals",
      price: 1299.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      description: "Premium sound quality with noise cancellation",
      price: 149.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  if (sampleProducts.length === 0) {
    return (
      <div className="product-list empty-list">
        <p>You have not added any Products yet</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
