import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./notification.css";

const NotiCard = ({ imageUrl, message, time, onDelete }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleDelete = () => {
    onDelete(); // Call the parent component's delete function
    setPopupVisible(false); // Hide the popup after deletion
  };

  return (
    <div className="Not-card-container">
      <div className="Notification-content">
        <img className="notification-image" src={imageUrl} alt="noti" />
        <p>{message}</p>
        <div className="Notification-footer">
          <p>{time}</p>
          <div className="ellipsis-container" onClick={handlePopupToggle}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="notification-popup">
          <p>Are you sure you want to delete this notification?</p>
          <button className="delete-button" onClick={handleDelete}>
            Yes
          </button>
          <button className="cancel-button" onClick={handlePopupToggle}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default NotiCard;
