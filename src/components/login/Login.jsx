// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import bg1 from "../../assets/Freebie-GradientTextures-01.jpg";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("User logged in successfully");

      setFormData({ email: "", password: "" });
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in successfully with Google:", user);

      navigate("/dashboard"); // Redirect to dashboard on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login__image">
          <div className="welcome">
            <h4>Welcome to</h4>
            <h4>EvoBuz</h4>
          </div>
          <div className="blur-container"></div>
          <img src={bg1} alt="Gradient-bg" />
        </div>
        <div className="login__form">
          <div className="text-content">
            <h1 className="hand-wave">🖐️</h1>
            <h1>Login to Your Account</h1>
            <p>Log In to EvoBuz to continue your journey.</p>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box vendor-input">
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
                  <div className="input-box vendor-input">
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
                <button
                  id="signInButton"
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle className="google-icon" />
                  <span className="sign-paragraph">Sign in with Google</span>
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
