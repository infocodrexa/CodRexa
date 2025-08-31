import React from "react";
import "./WhyUs.css";
import img1 from "../../../assets/WhyUsImg.jpg"; // top banner
import illustration from "../../../assets/whyus2.jpg"; // side illustration
import { useNavigate } from "react-router-dom";

const WhyUs = () => {
  const negative = useNavigate();
  return (
    <section className="WhyUs__section">
      {/* Top Banner */}
      <div className="WhyUs__banner">
        <img src={img1} alt="Codrexa Banner" className="WhyUs__banner-img" />
      </div>

      {/* <BackgroundIage src={img1}  alt={`Codrexa Banner`} /> */}

      {/* Split Section */}
      <div className="WhyUs__container">
        {/* Left image */}
        <div className="WhyUs__image">
          <img src={illustration} alt="Why Us Illustration" />
        </div>

        {/* Right content */}
        <div className="WhyUs__content">
          <h2 className="WhyUs__heading">Why Us</h2>
          <p>
            <strong>Codrexa is a Trusted IT Company</strong> that specializes in
            building professional static and dynamic websites along with SEO
            solutions to help your business grow online.
          </p>

          <p>
            Get the perfect blend of design, functionality, and visibility with{" "}
            <a href="#" className="WhyUs__highlight">
              Codrexa’s website development and SEO expertise.
            </a>{" "}
            Our team of skilled professionals use modern technologies and
            strategies to deliver websites that are not only visually appealing
            but also rank higher in search engines.
          </p>

          <p>
            Whether you need a static business portfolio, a dynamic web
            application, or optimized SEO for better reach, we ensure the
            best-fit approach tailored to your business needs.
          </p>

          <p>
            At Codrexa, we consistently innovate and adopt the latest
            technologies to deliver creative, user-friendly, and result-driven
            web solutions.
          </p>

          <button onClick={() => negative("/contact")} className="WhyUs__consult-btn">🎧 Talk to Consultant</button>
        </div>
      </div>

      {/* Bottom About Section */}
      <section className="WhyUs__about-section">
        <div className="WhyUs__overlay">
          <div className="WhyUs__about-content">
            <p>
              <strong>
                We provide end-to-end website development and SEO services for
                businesses looking to establish a strong online presence.
              </strong>{" "}
              At Codrexa, we don’t just follow instructions—we consult,
              strategize, and deliver the best possible solutions to help you
              succeed digitally.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyUs;
