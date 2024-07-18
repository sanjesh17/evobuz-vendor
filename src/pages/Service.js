import React from "react";
import Navbar from "../components/navbar/Navbar";
import ServiceForm from "../components/servicePage/index";
import Footer from "../components/footer/Footer";
import "./Service.css";

const Service = () => {
  return (
    <div className="Service">
      <div className="gradient__bg">
        <Navbar />
        <div className="sform-container">
          <ServiceForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Service;
