import React from "react";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import "./Product.css";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";
import ProductPage from "../components/productPage/ProductPage";

const Product = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <AdminNavbar />
          <ProductPage />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Product;
