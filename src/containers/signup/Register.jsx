import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import bg1 from "../../assets/Freebie-GradientTextures-01.jpg";
import { auth, googleProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      console.log("User registered successfully");

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in successfully with Google:", user);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="evo__sign-container">
      <div className="evo__sign-content">
        <div className="evo__sign-image">
          <div className="welcome">
            <h4>Welcome to</h4>
            <h4>EvoBuz</h4>
          </div>
          <div className="blur-container"></div>
          <img src={bg1} alt="Gradient-bg" />
        </div>
        <div className="evo__sign-form">
          <div className="text-content">
            <h1>Register Your Account</h1>
            <Link to="/login">
              <p className="log">Already Have an Account?</p>
            </Link>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
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
                    <span className="details">Phone Number</span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      pattern="[6789][0-9]{9}"
                      maxLength="10"
                      placeholder="Enter your number"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      minLength="8"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      minLength="8"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="evo_terms">
                  <input type="checkbox" required />
                  <span className="conditions">
                    I've read and agreed with the <span>Terms of Service</span>{" "}
                    and our <span>Privacy Policy</span>
                  </span>
                </div>
                <div className="sign-button">
                  <div className="button">
                    <input type="submit" value="Register" />
                  </div>
                  <div className="google-signin">
                    <button onClick={handleGoogleSignIn}>
                      Sign Up with Google
                    </button>
                  </div>
                </div>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
