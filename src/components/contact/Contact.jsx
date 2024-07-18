import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccessMessage(
            "Your query is successfully Registered,Our Agent will contact you soon "
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setErrorMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="vendor-contact-form">
      <h1>Contact</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="vendor-contact-form-container"
      >
        <div className="vendor-contact-form-group">
          <input
            type="text"
            name="from_name"
            placeholder="Enter Name"
            className="vendor-contact-form-control"
          />
        </div>
        <div className="vendor-contact-form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="vendor-contact-form-control"
          />
        </div>
        <div className="vendor-contact-form-group">
          <input
            type="text"
            name="phone_number"
            placeholder="Enter Phone Number"
            className="vendor-contact-form-control"
          />
        </div>
        <div className="vendor-contact-form-group">
          <textarea
            name="message"
            placeholder="Enter your message"
            className="vendor-contact-form-control"
          ></textarea>
        </div>
        <div className="vendor-contact-form-group">
          <button
            type="submit"
            className="vendor-contact-btn vendor-contact-btn-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
