// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import bg1 from "../../assets/Freebie-GradientTextures-01.jpg";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
                <button
                  id="signInButton"
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                >
                  <div className="google-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </div>
                  <span>Sign in with Google</span>
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
