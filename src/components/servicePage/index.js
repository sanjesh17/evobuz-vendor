import React, { useState, useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Circles } from "react-loader-spinner";

const ServicePage = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [lowestAmount, setLowestAmount] = useState(0);
  const [highestAmount, setHighestAmount] = useState(10000);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceCategories = [
    "Event Planning",
    "Catering Services",
    "Decorations",
    "Entertainment",
    "Photography and Videography",
    "Sound and Lighting",
    "Makeup and Styling",
    "Transport Services",
    "Security Services",
    "Logistics and Rentals",
    "Invitations and Stationery",
    "Guest Management",
    "Cleanup Services",
    "Other Services",
  ];

  const eventTypes = [
    "Weddings",
    "Corporate Events",
    "Private Parties",
    "Cultural Events",
    "Concerts and Performances",
    "Sporting Events",
    "Community Events",
    "Educational Events",
    "Exhibitions and Trade Shows",
    "Fashion Shows",
    "Food and Beverage Events",
    "Networking Events",
  ];

  const addServiceCategory = (category) => {
    if (serviceCategory === "Event Manager") {
      if (!selectedServices.includes(category)) {
        setSelectedServices([...selectedServices, category]);
      }
    } else {
      setSelectedServices([category]);
    }
  };

  const removeServiceCategory = (category) => {
    setSelectedServices(
      selectedServices.filter((service) => service !== category)
    );
  };

  const addEventType = (type) => {
    if (!selectedEventTypes.includes(type)) {
      setSelectedEventTypes([...selectedEventTypes, type]);
    }
  };

  const removeEventType = (type) => {
    setSelectedEventTypes(
      selectedEventTypes.filter((eventType) => eventType !== type)
    );
  };

  useEffect(() => {
    const getLocation = async () => {
      if (pincode.length === 6) {
        try {
          setError("");
          const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=${apiKey}`
          );
          const data = await response.json();
          if (data.status === "OK") {
            const result = data.results[0];
            setLocation(result.formatted_address);
          } else {
            setError(
              "Location not found. Please check the pincode and try again."
            );
          }
        } catch (err) {
          setError("An error occurred while fetching the location data.");
        }
      }
    };

    getLocation();
  }, [pincode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !serviceName ||
      !location ||
      !description ||
      selectedServices.length === 0 ||
      selectedEventTypes.length === 0
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("serviceCategory", serviceCategory);
    formData.append("location", location);
    formData.append("description_ser", description);
    formData.append("lowestAmount", lowestAmount);
    formData.append("highestAmount", highestAmount);

    selectedServices.forEach((service, index) => {
      formData.append(`selectedServices[${index}]`, service);
    });

    selectedEventTypes.forEach((eventType, index) => {
      formData.append(`selectedEventTypes[${index}]`, eventType);
    });

    imageFiles.forEach((file, index) => {
      formData.append(`files`, file);
    });

    videoFiles.forEach((file, index) => {
      formData.append(`files`, file);
    });

    const token = Cookies.get("token");
    setLoading(true);

    try {
      const response = await fetch(
        "https://evovendors.onrender.com/vendor/services",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Service added successfully:", responseData);
      setShowPopup(true);
      setLoading(false);

      setServiceName("");
      setServiceCategory("");
      setLocation("");
      setDescription("");
      setLowestAmount(0);
      setHighestAmount(10000);
      setPincode("");
      setImageFiles([]);
      setVideoFiles([]);
      setImagePreviews([]);
      setVideoPreviews([]);
      setSelectedServices([]);
      setSelectedEventTypes([]);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while sending the request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
    setImagePreviews((prevPreviews) => [
      ...prevPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    setVideoFiles((prevFiles) => [...prevFiles, ...files]);
    setVideoPreviews((prevPreviews) => [
      ...prevPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleServiceCategoryChange = (e) => {
    setServiceCategory(e.target.value);
    setSelectedServices([]);
  };

  const ServiceAddedPopup = ({ serviceName, onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="service-added-popup">
          <div className="popup-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="checkmark-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="popup-text">{serviceName} added successfully!</p>
          </div>
          <div className="close-button-container">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="service-page-container">
      <h1>Add Service</h1>
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
          strokeWidth="13"
        />
      </svg>
      {error && <p className="error-message">{error}</p>}
      <form className="service-form" onSubmit={handleSubmit}>
        <div className="service-form-group">
          <label htmlFor="serviceCategory" className="service-label">
            Service Category:
          </label>
          <select
            id="serviceCategory"
            className="service-select"
            value={serviceCategory}
            onChange={handleServiceCategoryChange}
          >
            <option value="">Select Service Category</option>
            <option value="Event Manager">Event Organizer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceName" className="service-label">
            Service Name:
          </label>
          <input
            type="text"
            id="serviceName"
            className="service-input"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>

        <div className="service-form-group">
          <label className="service-label">Event Types:</label>
          <div className="available-services">
            {eventTypes.map((type, index) => (
              <div key={index} className="available-service">
                <span>{type}</span>
                <button
                  type="button"
                  onClick={() => addEventType(type)}
                  disabled={selectedEventTypes.includes(type)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="selected-services-container">
          <h3>Selected Event Types:</h3>
          {selectedEventTypes.map((type, index) => (
            <div key={index} className="selected-service">
              <span>{type}</span>
              <button type="button" onClick={() => removeEventType(type)}>
                -
              </button>
            </div>
          ))}
        </div>

        <div className="service-form-group">
          <label htmlFor="servicePincode" className="service-label">
            Pincode:
          </label>
          <input
            type="text"
            id="servicePincode"
            className="service-input"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceLocation" className="service-label">
            Location:
          </label>
          <input
            type="text"
            id="serviceLocation"
            className="service-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            readOnly
          />
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceDescription" className="service-label">
            Description:
          </label>
          <textarea
            id="serviceDescription"
            className="service-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="service-form-group">
          <label className="service-label">Available Services:</label>
          <div className="available-services">
            {serviceCategories.map((category, index) => (
              <div key={index} className="available-service">
                <span>{category}</span>
                <button
                  type="button"
                  onClick={() => addServiceCategory(category)}
                  disabled={
                    serviceCategory === "Other" &&
                    selectedServices.length > 0 &&
                    !selectedServices.includes(category)
                  }
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="selected-services-container">
          <h3>Selected Services:</h3>
          {selectedServices.map((service, index) => (
            <div key={index} className="selected-service">
              <span>{service}</span>
              <button
                type="button"
                onClick={() => removeServiceCategory(service)}
              >
                -
              </button>
            </div>
          ))}
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceLowestAmount" className="service-label">
            Lowest Amount: ₹{lowestAmount}
          </label>
          <input
            type="range"
            id="serviceLowestAmount"
            className="service-range"
            min="0"
            max="100000"
            value={lowestAmount}
            onChange={(e) => setLowestAmount(Number(e.target.value))}
          />
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceHighestAmount" className="service-label">
            Highest Amount: ₹{highestAmount}
          </label>
          <input
            type="range"
            id="serviceHighestAmount"
            className="service-range"
            min="0"
            max="1000000"
            value={highestAmount}
            onChange={(e) => setHighestAmount(Number(e.target.value))}
          />
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceImageUpload" className="service-label">
            Upload Images:
          </label>
          <input
            type="file"
            id="serviceImageUpload"
            className="service-file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="service-image-preview"
            />
          ))}
        </div>

        <div className="service-form-group">
          <label htmlFor="serviceVideoUpload" className="service-label">
            Upload Videos:
          </label>
          <input
            type="file"
            id="serviceVideoUpload"
            className="service-file"
            accept="video/*"
            multiple
            onChange={handleVideoChange}
          />
          {videoPreviews.map((videoPreview, index) => (
            <video key={index} controls className="service-video-preview">
              <source src={videoPreview} type={videoFiles[index]?.type} />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        <div className="submit-container">
          <button type="submit" className="service-button" disabled={loading}>
            {loading ? (
              <Circles
                height="30"
                width="30"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
                wrapperClass="service-spinner-loader"
              />
            ) : (
              "Add Service"
            )}
          </button>
        </div>
      </form>
      {showPopup && (
        <ServiceAddedPopup
          serviceName={serviceName}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ServicePage;
