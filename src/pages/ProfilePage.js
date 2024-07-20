import React from "react";
import "./ProfilePage.css";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";

const ProfilePage = () => {
  return (
    <div className="gradient__bg">
      <AdminNavbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
