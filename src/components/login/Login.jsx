import React, { useState } from "react";
import "./login.css"; // Update CSS file name
import bg1 from "../../assets/Freebie-GradientTextures-01.jpg";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // You can add additional logic here, like redirecting to another page
      console.log("User logged in successfully");

      // Clear the form
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can add additional logic here, like redirecting to another page
      console.log("User signed in successfully with Google:", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login__container">
      {" "}
      {/* Use a different container class */}
      <div className="login__content">
        {" "}
        {/* Use a different content class */}
        <div className="login__image">
          {" "}
          {/* Use a different image class */}
          <div className="welcome">
            <h4>Welcome to</h4>
            <h4>EvoBuz</h4>
          </div>
          <div className="blur-container"></div>
          <img src={bg1} alt="Gradient-bg" />
        </div>
        <div className="login__form">
          {" "}
          {/* Use a different form class */}
          <div className="text-content">
            <h1 className="hand-wave">🖐️</h1>
            <h1>Login to Your Account</h1> {/* Update heading */}
            <p>Log In to EvoBuz to continue your journey.</p>{" "}
            {/* Update description */}
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="button">
                  <input type="submit" value="Login" />
                </div>
              </form>
              <div className="google-signin">
                <button onClick={handleGoogleSignIn}>
                  Sign in with Google
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
