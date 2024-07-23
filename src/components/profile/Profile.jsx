import React, { useState, useEffect } from "react";
import "./profile.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const ProfilePage = () => {
  const [logoPreview, setLogoPreview] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // You can now use this data object to send an API request
    console.log(data);

    // Example API call (uncomment and replace with your API endpoint)
    // fetch('your-api-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
  };

  return (
    <div className="Profile-page-container">
      <h1>Profile Page</h1>
      <svg
        className="header-slash"
        xmlns="http://www.w3.org/2000/svg"
        width="575"
        height="48"
        viewBox="0 0 575 48"
        fill="none"
      >
        <path
          d="M2 41C378 -20.5773 537.333 15.3428 570 41"
          stroke="#011EB6"
          stroke-width="13"
        />
      </svg>
      <form className="profile-form-container" onSubmit={handleSubmit}>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="businessName">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="businessLogo">
            Business Logo
          </label>
          <input
            type="file"
            id="businessLogo"
            name="businessLogo"
            className="profile-form-input"
            onChange={handleLogoChange}
          />
          {logoPreview && (
            <div className="profile-form-logo-preview">
              <img src={logoPreview} alt="Logo Preview" />
            </div>
          )}
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="ownerName">
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="profile-form-input"
            value={email}
            readOnly
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="gstNumber">
            GST Number
          </label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-label" htmlFor="panNumber">
            PAN
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-buttons">
          <button type="submit" className="profile-form-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
