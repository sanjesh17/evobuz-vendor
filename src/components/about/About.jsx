import "./about.css";
import Footer from "../footer/Footer.jsx";

const About = () => {
  return (
    <div className="vendor-about-page">
      <div className="vendor-who-we-con">
        <div className="vendor-about-section">
          <h1 className="who-heading">Who We Are:</h1>
          <p className="who-paragraph">
            Evobuz is guided by four principles: customer-centricity over
            competition, innovation-driven solutions, commitment to seamless
            operations, and strategic long-term planning. Evobuz aspires to be
            the premier platform for event management, the best partner for
            event organizers, and a secure, reliable solution for all users.
            Customized event planning, vendor management, real-time booking,
            tailored recommendations, seamless payment processing, virtual event
            integration, AI-driven analytics, and customer feedback mechanisms
            are some of the features pioneered by Evobuz.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <h1 className="evobuz-about-ven-heading"> Leadership Principles</h1>
          <p className="about-evo-paragraph">
            {" "}
            Our Leadership Principles guide our daily discussions and decisions,
            ensuring we stay true to our mission. We prioritize customer
            satisfaction, drive continuous innovation, commit to operational
            excellence, foster teamwork, and maintain integrity in all our
            actions.
          </p>
        </div>
        <div className="about-card">
          <h1 className="evobuz-about-ven-heading">Awards and Recognition</h1>
          <p className="about-evo-paragraph">
            {" "}
            We are honored to be recognized for the work we do on behalf of our
            customers, employees, and communities every day.
          </p>
        </div>
        <div className="about-card">
          <h1 className="evobuz-about-ven-heading"> Facts About Evobuz</h1>
          <p className="about-evo-paragraph">
            {" "}
            Evobuz leverages AI and AR/VR to redefine event planning, focusing
            on college fests, weddings, corporate events, and more. We
            prioritize customer satisfaction, collaborate with local vendors for
            economic impact, and advocate for sustainable practices.
          </p>
        </div>
      </div>
      <div className="about-quote-container">
        <div className="about-quotes">
          <img
            className="about-image"
            src="https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2019-10/iStock-855485092.webp?h=08b866d1&itok=twyjtv4R"
            alt="hio"
          />
        </div>
        <div className="about-white-card">
          <p className="about-image-heading">
            When I think of Evobuz, I envision a dynamic blend of cutting-edge
            technology and impactful innovation. Evobuz captures special moments
            in event management with seamless integration of AI and AR/VR
            technologies. Explore our journey in redefining customer experiences
            across diverse events, from college fests to weddings, corporate
            gatherings, and more.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
