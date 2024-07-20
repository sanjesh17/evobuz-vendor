import React from "react";
import "./DashboardPage.css";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const DashboardPage = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <AdminNavbar />
          <Dashboard />
          <Footer />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
