import { useState } from "react";
import ProductList from "../productcard/ProductList";
import ServiceList from "../serviceCard/ServiceList";
import { Link } from "react-router-dom";
import './index.css'
const SmallDashboard = () => {
  const [showServices, setShowServices] = useState(true);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="small-dashboard-container">
      <div className="small-dashboard-btn-box">
        <Link to="/services">
          <button className="small-dashboard-btn" type="button">
            Add Service
          </button>
        </Link>
        <Link to="/products">
          <button className="small-dashboard-btn" type="button">
            Add Product
          </button>
        </Link>
        <Link to="/contact">
          <button className="small-dashboard-btn" type="button">
            Contact
          </button>
        </Link>

        <button
          className="small-dashboard-toggle-btn"
          onClick={() => setShowServices(!showServices)}
        >
          {showServices ? "Hide Services" : "Show Services"}
        </button>

        <button
          className="small-dashboard-toggle-btn"
          onClick={() => setShowProducts(!showProducts)}
        >
          {showProducts ? "Hide Products" : "Show Products"}
        </button>
      </div>

      <div className="small-dashboard-cards-container">
        {showProducts && (
          <div className="small-dashboard-pro-card">
            <hr />
            <h4 className="h4">Products</h4>
            <ProductList />
          </div>
        )}

        {showServices && (
          <div className="small-dashboard-serv-card">
            <hr />
            <h4>Services</h4>
            <ServiceList />
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallDashboard;
