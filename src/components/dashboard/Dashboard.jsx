import React from "react";
import "./dashboard.css";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";
import MonthlySalesBarChart from "../chart/MonthlySalesBarChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dash-container">
      <div className="dash-main-container">
        <div className="sidebar-container">
          <h2>Dashboard</h2>
          <p>My Products</p>
          <p>My Service</p>
          <p>Reviews</p>
          <p>Notification</p>
        </div>
        <div className="mainboard-container">
          <div className="analytics-container">
            <div className="chart-wrapper">
              <WeeklySalesLineChart />
            </div>
            <div className="chart-wrapper">
              <MonthlySalesBarChart />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
