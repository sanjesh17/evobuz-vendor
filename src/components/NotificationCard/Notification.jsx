import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./notification.css";

const NotiCard = ({ imageUrl, message, time, onDelete }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const handlePopupToggle = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleDelete = () => {
    onDelete();
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Not-card-container">
      <div className="Notification-content">
        <img className="notification-image" src={imageUrl} alt="noti" />
        <p>{message}</p>
      </div>
      <div className="Notification-footer">
        <p>{time}</p>
        <div className="ellipsis-container" onClick={handlePopupToggle}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {isPopupVisible && (
        <div className="notification-popup" ref={popupRef}>
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
