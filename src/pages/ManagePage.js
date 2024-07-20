import React from "react";
import "./ManagePage.css";
import Manage from "../components/manage/Manage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const ManagePage = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <div className="page">
            <Navbar />
            <Manage />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default ManagePage;
