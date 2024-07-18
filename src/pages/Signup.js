import React from "react";
import Navbar from "../components/navbar/Navbar";
import Register from "../containers/signup/Register";
import Footer from "../components/footer/Footer";

const Signup = () => {
  return (
    <div className="Signup">
      <div className="gradient__bg">
        <Navbar />
        <Register />
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
