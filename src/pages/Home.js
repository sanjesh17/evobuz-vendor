import React, { useEffect, useState } from "react";
import Header from "../containers/header/Header";
import Navbar from "../components/navbar/Navbar";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import "./Home.css";
import usePageLoader from "../components/PageLoader/usePageLoader";

// Example function to check if the user is an admin
const checkIfAdmin = async () => {
  try {
    const response = await fetch("/api/check-admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Ensure cookies are sent for session-based authentication
    });

    if (!response.ok) throw new Error("Failed to check admin status");
    const data = await response.json(); // Assume response contains { isAdmin: true/false }
    return data.isAdmin;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const isLoading = usePageLoader();

  useEffect(() => {
    const fetchAdminStatus = async () => {
      const adminStatus = await checkIfAdmin();
      setIsAdmin(adminStatus);
    };

    fetchAdminStatus();
  }, []);

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="Home">
          <div className="gradient__bg">
            {isAdmin ? <AdminNavbar /> : <Navbar />}
            <Header />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
