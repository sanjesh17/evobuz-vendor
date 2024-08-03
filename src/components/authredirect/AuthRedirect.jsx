import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const checkUserAuth = async () => {
  try {
    Cookies.get("token");
  } catch (error) {
    console.error(error);
    return { isAuthenticated: false };
  }
};

const AuthRedirect = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkUserAuth();
      setIsAuthenticated(authStatus.isAuthenticated);
    };

    verifyAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthRedirect;
