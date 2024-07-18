import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Correct import for brand icons

const Footer = () => {
  return (
    <div className="footer-section-container">
      <div className="footer-sec">
        <div className="getus-know-container">
          <h2>Get to Know Us</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="let-us-connect">
          <h2>Let Us Connect</h2>
          <ul>
            <li>
              <a href="mailto:info@example.com">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">
                <FontAwesomeIcon icon={faPhone} /> Phone
              </a>
            </li>
            <li>
              <a href="https://facebook.com/example">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/example">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/example">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
