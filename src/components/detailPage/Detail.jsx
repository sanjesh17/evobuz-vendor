import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";
import Cookies from "js-cookie";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import usePageLoader from "../PageLoader/usePageLoader";
import Loader from "../loader/Loader";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const isLoading = usePageLoader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await fetch(
          `https://evovendors.onrender.com/vendor/products/${id}`,
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
        setProduct(data);
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
  if (!product) return <div>No product data available</div>;

  const handleImageError = (e) => {
    e.target.src = "/path/to/fallback-image.jpg";
  };

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="carousel-container">
          <div className="detail-header">
            <h2>{product.productName}</h2>
          </div>
          <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`https://evovendors.onrender.com/image/${image}`}
                  alt={`${product.productName} - ${index + 1}`}
                  onError={handleImageError}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="detail-content-container">
          <div className="desc-container">
            <h3>{product.productName}</h3>
            <hr />
            <p>{product.productDescription}</p>
            <div className="price-container">
              <div className="pricebtn-container">
                <button type="button">₹{product.price}</button>
              </div>
              <div className="info-container">
                <p>1200+ customers bought this last month</p>
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

export default Detail;
