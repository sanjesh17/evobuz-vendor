import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const AboutPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const isLoading = usePageLoader();

  useEffect(() => {
    // Example: Check local storage or any custom logic for admin status
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          {isAdmin ? <AdminNavbar /> : <Navbar />}
          <About />
        </div>
      )}
    </>
  );
};

export default AboutPage;
