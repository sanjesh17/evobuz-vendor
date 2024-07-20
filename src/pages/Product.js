import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import "./Product.css";
import ProductList from "../components/productcard/ProductList";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const Product = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <AdminNavbar />
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default Product;
