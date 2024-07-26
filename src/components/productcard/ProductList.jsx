import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./productcard.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://vendorweb.onrender.com/vendor/products"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="product-list">Loading...</div>;
  }

  if (error) {
    return <div className="product-list">Error: {error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className="product-list empty-list">
        <p>No products available</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
