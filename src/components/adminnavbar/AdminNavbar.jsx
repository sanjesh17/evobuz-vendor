import React, { useState, useEffect } from "react";
import "./adminnavbar.css";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import UserProfilePopup from "../userpopup/UserProfilePopup";

const AdminNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
