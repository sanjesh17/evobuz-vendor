import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const AboutPage = () => {
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
          <About />
        </div>
      )}
    </>
  );
};

export default AboutPage;
