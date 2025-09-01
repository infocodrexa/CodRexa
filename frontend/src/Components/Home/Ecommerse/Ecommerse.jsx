import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ecommerce.css";
import chatImg from "../../../assets/cta-image.webp";  // Chat image

const Ecommerce = () => {

  const navigate = useNavigate();

  return (
    <section className="ecommerce-section">
      <div className="ecommerce-card">
        <h2>
          Why we are one of the Leading E-Commerce Website Designing & Development Companies
        </h2>
        <p>
          E-commerce is a growing business sector, and a professional website is essential. We build mobile-friendly, responsive, SEO-optimized websites and apps to help your business succeed online.
        </p>
        <p>
          With over <b>1 years of experience</b>, we have created E-commerce websites for startups and small businesses. We provide end-to-end solutions including web design, development, and digital marketing.
        </p>
        <p>
          Our websites are designed to attract your target audience, provide excellent user experience, and ensure higher visibility in search engines.
        </p>
        <p>
          Our team of professional <b>E-commerce developers</b> also provides web hosting, maintenance, and strategic digital marketing support to help your business grow.
        </p>

        {/* ✅ Chat Box Card */}
        <div className="chat-card">
          <img src={chatImg} alt="Chat Illustration" className="chat-image" />
          <div className="chat-content">
            <h3>Let's Make Big Things Happen</h3>
            <p>
              We help startups and small businesses convert their ideas into profitable online solutions.
            </p>
             <a onClick={() => navigate("")}  href="https://wa.me/917300423846?text=Hi%20Codrexa%20👋%20I%20am%20interested%20in%20your%20services.%20Please%20connect%20with%20me." ><button className="chat-btn Letbutton">Let's Chat Us </button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
