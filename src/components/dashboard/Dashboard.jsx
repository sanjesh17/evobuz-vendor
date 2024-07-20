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
              <div className="top-bar-container">
                <div className="nav-back-container">
                  <div
                    className="back-button"
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                  </div>
                  <h2>My Products</h2>
                </div>
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
                <div className="nav-back-container">
                  <div
                    className="back-button"
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                  </div>
                  <h2>My Services</h2>
                </div>
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
          <h2 onClick={() => setActiveTab("dashboard")}>Dashboard</h2>
          <p onClick={() => setActiveTab("products")}>My Products</p>
          <p onClick={() => setActiveTab("services")}>My Services</p>
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
