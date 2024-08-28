import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";
import "./servicecard.css";
import Cookies from "js-cookie";
import usePageLoader from "../PageLoader/usePageLoader";
import Loader from "../loader/Loader";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isLoading = usePageLoader();

  const handleDelete = (deletedServiceId) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service._id !== deletedServiceId)
    );
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const token = Cookies.get("token"); // Retrieve the token from cookies

    try {
      const response = await axios.get(
        "https://evovendors.onrender.com/vendor/services", // Updated URL
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the authorization token
          },
        }
      );

      setServices(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="service-list loading">
        <Loader show={isLoading} />
      </div>
    );
  }

  if (error && services.length === 0) {
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
