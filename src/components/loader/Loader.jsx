import React from "react";
import "./loader.css";

const Loader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loader-container-1">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
