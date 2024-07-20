import React from "react";
import Navbar from "../components/navbar/Navbar";
import ServiceForm from "../components/servicePage/index";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";
import "./Service.css";

const Service = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="Service">
          <div className="gradient__bg">
            <Navbar />
            <div className="sform-container">
              <ServiceForm />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};
export default Service;
