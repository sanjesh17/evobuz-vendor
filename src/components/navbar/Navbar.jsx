import React from "react";
import "./navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
          <button
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
