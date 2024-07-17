import React from "react";
import Navbar from "../components/navbar/Navbar";
import ServiceForm from "../components/servicePage/index";
import "./Service.css";

const Service = () => {
  return (
    <div className="Service">
      <div className="gradient__bg">
        <Navbar />
        <div className="sform-container">
          <ServiceForm />
        </div>
      </div>
    </div>
  );
};
export default Service;
