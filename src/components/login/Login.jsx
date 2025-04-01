import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import emailjs from "emailjs-com";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleOtpCodeChange = (e) => setOtpCode(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);

  const requestOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://evovendors.onrender.com/login", { phoneNumber });
      setMessage(response.data.status);
      setOtpSent(true);
    } catch (error) {
      setMessage(error.response?.data?.error || "Error requesting OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("https://evovendors.onrender.com/verify-login", { phoneNumber, otpCode });
      setMessage(response.data.status);
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 1 });
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "Error verifying OTP");
    }
  };

  const handleSignup = async () => {
    try {
      const templateParams = {
        username,
        phoneNumber,
        companyName,
      };

      await emailjs.send(
        "service_vkhcy4g", 
        "template_d8o7s69", 
        templateParams, 
        "mLc0346myzZrtl4Hx"
      );
      setMessage("Signup request sent successfully! Please wait 15-30 minutes to access this service.");
      setShowSignup(false);
    } catch (error) {
      setMessage("Error sending signup request");
    }
  };

  return (
    <div className="login-container">
      <div className="vendorslogin-container">
        <div className="log-head-container">
          <h1>Hey,</h1>
          <h2 className="vendorslogin-header">Welcome Back</h2>
        </div>
        {!showSignup ? (
          !otpSent ? (
            <div className="vendorslogin-form">
              <input
                type="tel"
                className="vendorslogin-input"
                placeholder="(+91) Enter your mobile number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button className="vendorslogin-button" onClick={requestOtp} disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
              <p className="signup-link" onClick={() => setShowSignup(true)}>
                Add New User
              </p>
            </div>
          ) : (
            <div className="vendorslogin-form">
              <input
                type="text"
                className="vendorslogin-input"
                placeholder="Enter OTP"
                value={otpCode}
                onChange={handleOtpCodeChange}
              />
              <button className="vendorslogin-button" onClick={verifyOtp}>Verify OTP</button>
            </div>
          )
        ) : (
          <div className="vendorslogin-form">
            <input
              type="text"
              className="vendorslogin-input"
              placeholder="Enter Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="tel"
              className="vendorslogin-input"
              placeholder="(+91) Enter your mobile number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <input
              type="text"
              className="vendorslogin-input"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={handleCompanyNameChange}
            />
            <button className="vendorslogin-button" onClick={handleSignup}>Sign Up</button>
            <p className="signup-link" onClick={() => setShowSignup(false)}>
              Back to Login
            </p>
          </div>
        )}
        {message && <p className="vendorslogin-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
