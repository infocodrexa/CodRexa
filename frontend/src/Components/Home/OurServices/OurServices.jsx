import "./OurServices.css";
import { useNavigate } from "react-router-dom";

export default function OurServices() {
 const navigate = useNavigate();
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Left Content */}
        <div className="services-left">
          <h4 className="sub-title">OUR SERVICE</h4>
          <h2 className="main-title">
            We Offer Reliable – <br />
            <span>Web Development,</span> <br />
            <span>Mobile App Development &</span> <br />
            <span>Digital Marketing Solutions with Codrexa.</span>
          </h2>
          <p>
            At Codrexa, we create solutions tailored for your business. Our goal is to provide a complete package that is cost-efficient, effective, and scalable.
          </p>
          <p>
            Our website designing, development, and maintenance services are designed to save your time and money while delivering long-term results.
          </p>
          <p>
            We consult and strategize to help your business grow online. Our web designs are engaging, modern, and result-driven.
          </p>
          <p>
            Many clients have achieved success and growth through our{" "}
            <a href="#">web development and digital marketing services.</a>
          </p>

          <button onClick={() => navigate("/contact")} className="cta-btns">🎧 Get A Free Quote</button>
        </div>

        {/* Right Service Cards */}
        <div className="services-right">
          <div className="service-card">
            <h3>E-Commerce Website Development</h3>
            <p>
              We help startups and small businesses build professional, user-friendly eCommerce websites with seamless performance and maintenance support. Experience: 1 years.
            </p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              We provide hybrid and native mobile app development for Android and iOS, focusing on usability, speed, and reliability.
            </p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>
              Codrexa’s trained digital marketing team helps businesses improve visibility, engagement, and conversions through customized strategies.
            </p>
          </div>
          <div className="service-card">
            <h3>SEO Services</h3>
            <p>
              Our SEO experts optimize websites to rank higher in search engines. We focus on sustainable, long-term growth for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
