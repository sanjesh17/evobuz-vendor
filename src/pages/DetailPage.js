import React from "react";
import Detail from "../components/detailPage/Detail";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";

const DetailPage = () => {
  return (
    <div className="gradient__bg">
      <AdminNavbar />
      <Detail />
    </div>
  );
};

export default DetailPage;
