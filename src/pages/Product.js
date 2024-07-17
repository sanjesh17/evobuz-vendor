import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./Product.css";
import ProductList from "../components/productcard/ProductList";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="p-container">
        <Sidebar />
        <div className="content-container">
          <div className="top-container">
            <h1 className="revenue">Your total revenue</h1>
            <h1>₹26,720</h1>
          </div>
          <div className="main-container">
            <h2>My Products</h2>
            <div className="cards">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
