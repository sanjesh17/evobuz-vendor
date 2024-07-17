import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-container">
      <div className="head-content">
        <h4>Main Menu</h4>
      </div>
      <div className="items">
        <a href="#">Dashboard</a>
        <a href="#">Orders</a>
        <a href="#">Analytics</a>
      </div>
    </div>
  );
};

export default Sidebar;
