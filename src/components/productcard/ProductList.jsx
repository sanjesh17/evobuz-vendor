// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddProductCard from "./AddProductCard";
import "./productcard.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className="product-list">
      <AddProductCard onAddProduct={handleAddProduct} />

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
