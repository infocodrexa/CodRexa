import React from "react";
import "./WhyChooseUs.css";
import team from "../../../assets/what-we-do.png";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
   const navigate = useNavigate();
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Side Image */}
        <div className="why-left">
          <img src={team} alt="Team Work" className="why-image" />
        </div>

        {/* Right Side Content */}
        <div className="why-right">
          <h4 className="why-subtitle">WHY CODREXA IS A TRUSTED NAME FOR</h4>
          <h2 className="why-title">
            Website Designing & Development <br /> Services in Samastipur, Bihar
          </h2>
          <ul className="why-list">
            <li>Over 1 years of experience in web development services.</li>
            <li>Delivered 5+ projects successfully for startups & small businesses.</li>
            <li>Served clients across India with satisfaction.</li>
            <li>Expert in custom website designing at affordable prices.</li>
            <li>Web services for multiple industries including e-commerce, education, and business.</li>
            <li>Helping startups and small businesses grow online.</li>
            <li>Enterprise-level web-based solutions.</li>
            <li>Open to outsourcing projects and collaborations.</li>
            <li>Providing web services internationally when required.</li>
            <li>Known for reliable customer support and timely delivery.</li>
            <li>Complete e-commerce solutions for businesses in Samastipur and beyond.</li>
          </ul>
          <button onClick={() => navigate("/contact")} className="talk-btn">💬 Talk to Consultant</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
