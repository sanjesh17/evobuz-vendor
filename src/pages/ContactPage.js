import React from "react";
import "./ContactPage.css";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <Contact />
    </div>
  );
};

export default ContactPage;
