import React from "react";
import "./ContactPage.css";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const ContactPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  
  return (
    <div className="gradient__bg">
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
