import React from "react";
import "./loader.css";

const Loader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loader-container">
      <div className="loader">
        <img
          className="about-image"
          src="https://res.cloudinary.com/dgviahrbs/image/upload/v1721299352/WhatsApp_Image_2024-07-18_at_13.58.56-removebg-preview_ly8dxx.png"
          alt="about-logo"
        />
      </div>
    </div>
  );
};

export default Loader;
