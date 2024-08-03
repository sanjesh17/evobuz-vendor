import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    Cookies.remove("token");
    navigate("/home");
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
