import React from "react";
import Header from "../containers/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
