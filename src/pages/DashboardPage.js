import React from "react";
import "./DashboardPage.css";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/footer/Footer";

const DashboardPage = () => {
  return (
    <div className="gradient__bg">
      <AdminNavbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default DashboardPage;
