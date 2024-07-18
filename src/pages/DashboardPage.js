import React from "react";
import "./DashboardPage.css";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/footer/Footer";

const DashboardPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default DashboardPage;
