import React from "react";
import "./detail.css";
import card1 from "../../assets/icard-1.jpg";
import card2 from "../../assets/icard-2.jpg";
import card3 from "../../assets/icard-3.jpg";
import WeeklySalesLineChart from "../chart/WeeklySalesLineChart";

const Detail = () => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="carousel-container">
          <div className="detail-header">
            <h2>Nike Airmax 2017</h2>
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
            <h4>Nike Inc</h4>
            <h3>2017 Nike Air Max</h3>
            <hr></hr>
            <p>
              The 2017 Nike Air Max combines style and performance in a sleek
              package. Featuring a full-length visible Air Max cushioning unit,
              this shoe offers superior comfort and impact protection. Its
              engineered mesh upper provides excellent breathability and
              flexibility, while the foam midsole adds an extra layer of
              cushioning.
            </p>
            <div className="price-container">
              <div className="pricebtn-container">
                <button type="button">₹4700</button>
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
