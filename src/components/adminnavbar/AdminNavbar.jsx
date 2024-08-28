import React, { useState, useEffect } from "react";
import "./adminnavbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import UserProfilePopup from "../userpopup/UserProfilePopup";

const fetchUser = async () => {
  try {
    const response = await fetch("/api/current-user");
    if (!response.ok) throw new Error("Failed to fetch user");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const AdminNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };

    getUserData();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="evo__navbar">
      <div className="evo__navbar-links">
        <div className="evo__navbar-links_logo">
          <div className="logo">
            <Link to="/dashboard">
              <img className="logo-image-main" src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="evo__navbar-links_container">
          <div className="navbar-user-icon" onClick={togglePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </div>
          {showPopup && (
            <UserProfilePopup user={user} onClose={() => setShowPopup(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
