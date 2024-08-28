import React from "react";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import ServiceDetails from "../components/service-details/ServiceDetails";

const ServiceDetailPage = () => {
  return (
    <div className="gradient__bg">
      <AdminNavbar />
      <ServiceDetails />
    </div>
  );
};

export default ServiceDetailPage;
