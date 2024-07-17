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
              <p>EvoBuz</p>
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
          <Link to="/service">
            <p>Contact</p>
          </Link>
          <Link>
            <p>Manage</p>
          </Link>
          <p>Login</p>
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
