import React from "react";
import "./ContactPage.css";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const ContactPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const isLoading = usePageLoader();

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
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          {isAdmin ? <AdminNavbar /> : <Navbar />}
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ContactPage;
