import React from "react";
import Login from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const LoginPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
