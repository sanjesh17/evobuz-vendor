import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import card1 from "../../assets/icard-1.jpg";
import card2 from "../../assets/icard-2.jpg";
import card3 from "../../assets/icard-3.jpg";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get the id from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://evobuzbackend-attempt-4.onrender.com/api/products/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const selectedProduct = data.find((p) => p.id === parseInt(id));
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product data available</div>;

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="carousel-container">
          <div className="detail-header">
            <h2>{product.product_name}</h2>
          </div>
          <div className="image-cards">
            <div className="image-big">
              <img src={card1} alt="Pimage-1"></img>
            </div>
            <div className="small-container">
              <img src={card2} alt="Pimage-2" />
              <img src={card3} alt="Pimage-3" />
            </div>
          </div>
        </div>
        <div className="detail-content-container">
          <div className="desc-container">
            <h4>{product.Business_name}</h4>
            <h3>{product.product_name}</h3>
            <hr></hr>
            <p>{product.description}</p>
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
