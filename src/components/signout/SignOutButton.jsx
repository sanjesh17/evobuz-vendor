import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
