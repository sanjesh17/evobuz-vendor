import React, { useState } from "react";
import "./servicecard.css";

const ServiceCard = ({ service, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setIsDeleting(true);
      try {
        const response = await fetch(
          `https://vendorweb.onrender.com/vendor/services/${service._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete the service");
        }

        onDelete(service._id);
      } catch (error) {
        console.error("Error deleting service:", error);
        alert("Failed to delete the service. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className={`service-card ${expanded ? "expanded" : ""}`}>
      <div className="service-image">
        <img src={service.images[0]} alt={service.serviceName} />
      </div>
      <div className="service-content">
        <span className="service-category">{service.serviceCategory}</span>
        <h2 className="service-name">{service.serviceName}</h2>
        <p className="service-location">{service.location}</p>
        <p className="service-price">
          ₹{service.lowestAmount} - ₹{service.highestAmount}
        </p>

        {expanded && (
          <>
            <p className="service-description">{service.description_ser}</p>
            <div className="service-details">
              <h4>Services</h4>
              <ul>
                {service.selectedServices.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-details">
              <h4>Event Types</h4>
              <ul>
                {service.selectedEventTypes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-media">
              <span className="image-count">
                {service.images.length} images
              </span>
              <span className="video-count">
                {service.videos.length} videos
              </span>
            </div>
          </>
        )}

        <div className="card-actions">
          <button className="expand-button" onClick={toggleExpand}>
            {expanded ? "Show Less" : "Show More"}
          </button>
          <button
            className="delete-button"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
