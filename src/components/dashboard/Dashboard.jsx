import React, { useState } from "react";
import "./dashboard.css";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";
import MonthlySalesBarChart from "../chart/MonthlySalesBarChart";
import { Link } from "react-router-dom";
import ProductList from "../productcard/ProductList";
import NotificationPage from "../../pages/NotificationPage";
import Contact from "../contact/Contact";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = () => {
    if (activeTab === "contact") {
      return <Contact />;
    }
    if (activeTab === "notifications") {
      return <NotificationPage />;
    }
    if (activeTab === "products") {
      return (
        <div className="p-container">
          <div className="content-container">
            <div className="main-container">
              <div className="top-bar-container">
                <h2>My Products</h2>
                <Link to="/products">
                  <button type="button">Add Product</button>
                </Link>
              </div>
              <div className="cards">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === "services") {
      return (
        <div className="p-container">
          <div className="content-container">
            <div className="main-container">
              <div className="top-bar-container">
                <h2>My Services</h2>
                <Link to="/services">
                  <button type="button">Add Service</button>
                </Link>
              </div>
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
          <p onClick={() => setActiveTab("dashboard")}>Dashboard</p>
          <p onClick={() => setActiveTab("products")}>My Products</p>
          <p onClick={() => setActiveTab("services")}>My Services</p>
          <p onClick={() => setActiveTab("reviews")}>Reviews</p>
          <p onClick={() => setActiveTab("notifications")}>Notifications</p>
          <p onClick={() => setActiveTab("contact")}>Contact</p>
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
