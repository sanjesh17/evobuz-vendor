import React from "react";
import "./adminnavbar.css";
import { Link } from "react-router-dom";
import SignOutButton from "../signout/SignOutButton";

const AdminNavbar = () => {
  return (
    <div className="evo__navbar">
      <div className="evo__navbar-links">
        <div className="evo__navbar-links_logo">
          <div className="logo">
            <Link to="/home">
              <img
                className="logo-image-main"
                src="https://res.cloudinary.com/dgviahrbs/image/upload/v1721299352/WhatsApp_Image_2024-07-18_at_13.58.56-removebg-preview_ly8dxx.png"
                alt="about-logo"
              />
            </Link>
          </div>
        </div>
        <div className="evo__navbar-links_container">
          <Link to="/home">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
