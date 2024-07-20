import React from "react";
import Navbar from "../components/navbar/Navbar";
import Register from "../containers/signup/Register";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const Signup = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="Signup">
          <div className="gradient__bg">
            <Navbar />
            <Register />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
