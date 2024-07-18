import React from "react";
import Login from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";

const LoginPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
