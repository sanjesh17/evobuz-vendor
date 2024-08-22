import React from 'react';
import './header.css';
import Logo from '../../assets/Logo.png';
import {useNavigate} from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="evo__header section__padding" id="home">
      <div className="evo__header-content">
        <h1 className="text">Expand Your Business with Event Partnerships.</h1>
        <p>Effortlessly plan and book your next event. Connect with top venues, vendors, and planners to create unforgettable moments. Start your journey with us today!</p>
        <div className="evo__header-content__input">
          <input type="email" placeholder="Type Email Address" />
          <button type="button" onClick={() => {
            navigate('/signup');
          }}>Get Started</button>
        </div>
      </div>
      <div className="evo__header-image">
        <img src={Logo} alt="event" />
      </div>
    </div>
  )
}

export default Header