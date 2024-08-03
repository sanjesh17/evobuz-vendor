import React from "react";
import { useNavigate } from "react-router-dom";
import "./userprofilepopup.css";
import SignOutButton from "../signout/SignOutButton";

const UserProfilePopup = ({ user, onClose }) => {
  const navigate = useNavigate();

  const handleMyProfile = () => {
    navigate("/profile");
    onClose();
  };

  return (
    <div className="user-profile-popup">
      <div className="user-info">
        <p>{user ? user.name || user.email : "Guest"}</p>
      </div>
      <div className="profilebutton-container">
        <button onClick={handleMyProfile}>My Profile</button>
        <SignOutButton />
      </div>
    </div>
  );
};

export default UserProfilePopup;
