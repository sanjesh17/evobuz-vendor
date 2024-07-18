import React from "react";
import "./DashboardPage.css";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../components/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
