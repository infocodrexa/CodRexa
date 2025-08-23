import React from "react";
import "./WhyChooseUs.css";
import team from "../../../assets/what-we-do.png";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Side Image */}
        <div className="why-left">
          <img src={team} alt="Team Work" className="why-image" />
        </div>

        {/* Right Side Content */}
        <div className="why-right">
          <h4 className="why-subtitle">WHY A R INFOTECH IS TRUSTED NAME FOR</h4>
          <h2 className="why-title">
            Website Designing & Development <br /> Services in Jaipur, India
          </h2>
          <ul className="why-list">
            <li>More than 15 years’ experience in web development services.</li>
            <li> Worked on 2000+ projects globally.</li>
            <li>Served 1000+ clients with satisfaction.</li>
            <li>Expert in custom website designing at affordable prices.</li>
            <li>Web services to all types of industries.</li>
            <li>Helping 800+ small businesses & startups.</li>
            <li>Enterprise-level web-based solutions.</li>
            <li>Ready to join hands for outsourcing projects.</li>
            <li>Web services to USA, UK, UAE & Saudi Arabia.</li>
            <li>Known for excellent customer support.</li>
            <li>Complete e-commerce solution in Jaipur, India.</li>
          </ul>
          <button className="talk-btn">💬 Talk to Consultant</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
