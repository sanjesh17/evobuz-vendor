import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./servicedetails.css";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";
import Cookies from "js-cookie";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import usePageLoader from "../PageLoader/usePageLoader";
import Loader from "../loader/Loader";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const isLoading = usePageLoader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await fetch(
          `https://evovendors.onrender.com/vendor/services/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="detail-content loading">
        <Loader show={isLoading} />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!service) return <div>No service data available</div>;

  const handleImageError = (e) => {
    e.target.src = "/path/to/fallback-image.jpg";
  };

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="carousel-container">
          <div className="detail-header">
            <h2>{service.serviceName}</h2>
          </div>
          <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay>
            {service.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`https://evovendors.onrender.com/image/${image}`}
                  alt={`${service.serviceName} - ${index + 1}`}
                  onError={handleImageError}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="detail-content-container">
          <div className="desc-container">
            <h3>{service.serviceName}</h3>
            <p className="service-category-pill">{service.serviceCategory}</p>
            <p>{service.location}</p>
            <hr />
            <p>{service.description_ser}</p>
            <hr />
            <div className="service-page-content">
              <div className="service-page-details">
                <h2>Event Types</h2>
                <ul>
                  {service.selectedEventTypes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page-details">
                <h2>Services</h2>
                <ul>
                  {service.selectedServices.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="price-container">
              <div className="pricebtn-container">
                <button type="button">
                  ₹{service.lowestAmount} - ₹{service.highestAmount}
                </button>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <WeeklySalesLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
