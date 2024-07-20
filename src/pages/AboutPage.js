import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const AboutPage = () => {
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
      <About />
    </div>
  );
};

export default AboutPage;
