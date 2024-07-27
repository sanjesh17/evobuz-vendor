import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import "./servicecard.css";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (deletedServiceId) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service._id !== deletedServiceId)
    );
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://vendorweb.onrender.com/vendor/services"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="service-list loading">Loading...</div>;
  }

  if (error) {
    return <div className="service-list error">Error: {error}</div>;
  }

  if (services.length === 0) {
    return (
      <div className="service-list empty-list">
        <p>No services available</p>
      </div>
    );
  }

  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ServiceList;
