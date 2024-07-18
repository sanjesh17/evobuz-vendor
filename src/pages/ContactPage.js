import React from "react";
import "./ContactPage.css";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
