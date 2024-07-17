import React from "react";
import "./manage.css";
import { Link } from "react-router-dom";

const Manage = () => {
  return (
    <div className="manage-container">
      <div className="f-container">
        <div className="page-left">
          <h1>Hello Admin,</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="575"
            height="48"
            viewBox="0 0 575 48"
            fill="none"
          >
            <path
              d="M2 41C378 -20.5773 537.333 15.3428 570 41"
              stroke="#011EB6"
              stroke-width="13"
            />
          </svg>
          <p>What would you like</p>
          <p>to do today?</p>
        </div>
        <div className="page-right">
          <div className="button-container">
            <Link to="/services">
              <button type="button">Manage Services</button>
            </Link>
            <Link to="/products">
              <button type="button">Manage Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
