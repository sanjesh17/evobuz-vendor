import React from "react";
import "./ManagePage.css";
import Manage from "../components/manage/Manage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const ManagePage = () => {
  return (
    <div className="gradient__bg">
      <div className="page">
        <Navbar />
        <Manage />
        <Footer />
      </div>
    </div>
  );
};

export default ManagePage;
