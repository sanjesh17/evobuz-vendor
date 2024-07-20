import React, { useState } from "react";
import "./dashboard.css";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";
import MonthlySalesBarChart from "../chart/MonthlySalesBarChart";
import { Link } from "react-router-dom";
import ProductList from "../productcard/ProductList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = () => {
    if (activeTab === "products") {
      return (
        <div className="p-container">
          <div className="content-container">
            <div className="main-container">
              <h2>My Products</h2>
              <div className="cards">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="main-content-container">
        <div className="heading-container">
          <h2>My Products and Services</h2>
          <div className="btn-box">
            <Link to="/services">
              <button type="button">Add Service</button>
            </Link>
            <Link to="/products">
              <button type="button">Add Product</button>
            </Link>
          </div>
        </div>
        <div className="cards-container"></div>
      </div>
    );
  };

  return (
    <div className="dash-container">
      <div className="dash-main-container">
        <div className="sidebar-container">
          <h2 onClick={() => setActiveTab("dashboard")}>Dashboard</h2>
          <p onClick={() => setActiveTab("products")}>My Products</p>
          <p onClick={() => setActiveTab("services")}>My Service</p>
          <p onClick={() => setActiveTab("reviews")}>Reviews</p>
          <p onClick={() => setActiveTab("notifications")}>Notification</p>
        </div>
        <div className="mainboard-container">
          {activeTab === "dashboard" && (
            <div className="analytics-container">
              <div className="chart-wrapper">
                <WeeklySalesLineChart />
              </div>
              <div className="chart-wrapper">
                <MonthlySalesBarChart />
              </div>
            </div>
          )}
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
