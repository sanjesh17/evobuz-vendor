import React from "react";
import Login from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import usePageLoader from "../components/PageLoader/usePageLoader";
import Loader from "../components/loader/Loader";

const LoginPage = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <div className="gradient__bg">
          <Navbar />
          <Login />
        </div>
      )}
    </>
  );
};

export default LoginPage;
