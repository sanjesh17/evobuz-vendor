import React from "react";
import "./ProfilePage.css";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import usePageLoader from "../components/PageLoader/usePageLoader";

const ProfilePage = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <AdminNavbar />
          <Profile />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
