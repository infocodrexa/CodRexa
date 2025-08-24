import React from "react";
import "./TeamWork.css";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaSearch,
  FaRocket,
} from "react-icons/fa";
import img1 from "../../../assets/Our Team.png"; // top banner

const TeamWork = () => {
  return (
    <section className="teamwork-page">
      {/* Top Banner */}
      <div className="banner2">
        <img src={img1} alt="Codrexa Banner" className="banner-img2" />
      </div>
      {/* Header */}
      <div className="teamwork-header">
        <h1>How Our Team Works</h1>
        <p>
          At <strong>Codrexa</strong>, teamwork is the heart of everything we
          do. From brainstorming ideas to launching live projects, our
          developers, designers, and SEO experts collaborate to deliver
          outstanding results.
        </p>
      </div>

      {/* Work Process */}
      <div className="process-container">
        <div className="process-step">
          <FaLightbulb className="icon" />
          <h3>1. Brainstorm</h3>
          <p>
            We begin with creative ideas and client discussions to set the
            foundation.
          </p>
        </div>

        <div className="process-step">
          <FaPencilRuler className="icon" />
          <h3>2. Design</h3>
          <p>
            Our design team creates intuitive and attractive layouts for user
            experience.
          </p>
        </div>

        <div className="process-step">
          <FaCode className="icon" />
          <h3>3. Development</h3>
          <p>
            Developers turn the design into fully functional static & dynamic
            websites.
          </p>
        </div>

        <div className="process-step">
          <FaSearch className="icon" />
          <h3>4. SEO Optimization</h3>
          <p>
            SEO specialists ensure that the website ranks well on search
            engines.
          </p>
        </div>

        <div className="process-step">
          <FaRocket className="icon" />
          <h3>5. Launch</h3>
          <p>
            Finally, we test everything and launch the project for the world to
            see.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamWork;
