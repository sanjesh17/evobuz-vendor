import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AddProductCard from "./AddProductCard";
import "./productcard.css";

const API_BASE_URL = "http://localhost:8000/api/products/";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  };

  const handleAddProduct = (newProductData) => {
    axios
      .post(API_BASE_URL, newProductData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProducts((prevProducts) => [...prevProducts, response.data]);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
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
