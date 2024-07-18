import React from "react";
import "./dashboard.css";

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
          <div className="analytics-container"></div>
          <div className="main-content-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
