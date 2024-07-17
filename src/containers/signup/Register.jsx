import React from 'react';
import './register.css';
import bg1 from "../../assets/Freebie-GradientTextures-01.jpg"

const Register = () => {
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
            <h1>Register Your Business!</h1>
            <p>Onboard as a vendor and improve your reach, sales and contact.</p>
            <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Business Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <span className="details">PAN Number</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" pattern="[6789][0-9]{9}" maxLength="10" placeholder="Enter your number" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password" minLength="8" required />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" minLength="8" required />
            </div>
          </div>
          <div className="evo_terms">
            <input type="checkbox" required/>
            <span className='conditions'>I've read and agreed with the <span>Terms of Service</span> and our <span>Privacy Policy</span></span>
          </div>
          <div className="button">
            <input type="submit" defaultValue="Register" value="Sign Up" />
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register