import React from "react";
import "./ManagePage.css";
import Manage from "../components/manage/Manage";
import Navbar from "../components/navbar/Navbar";

const ManagePage = () => {
  return (
    <div className="gradient__bg">
      <div className="page">
        <Navbar />
        <Manage />
      </div>
    </div>
  );
};

export default ManagePage;
