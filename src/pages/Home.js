import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../containers/header/Header";
import Navbar from "../components/navbar/Navbar";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Footer from "../components/footer/Footer";
import "./Home.css";

const Home = () => {
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
    <div className="Home">
      <div className="gradient__bg">
        {isAdmin ? <AdminNavbar /> : <Navbar />}
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
