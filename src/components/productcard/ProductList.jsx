import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./productcard.css";
import Cookies from "js-cookie";
import usePageLoader from "../PageLoader/usePageLoader";
import Loader from "../loader/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isLoading = usePageLoader();

  const handleDelete = (deletedProductId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== deletedProductId)
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const token = Cookies.get("token"); // Retrieve token from cookies

    try {
      const response = await fetch(
        "https://evovendors.onrender.com/vendor/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the authorization token
          },
        }
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
    return (
      <div className="product-list loading">
        <Loader show={isLoading} />
      </div>
    );
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
        <ProductCard
          key={product._id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
