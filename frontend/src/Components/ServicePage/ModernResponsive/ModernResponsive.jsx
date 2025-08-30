import React from "react";
import "./ModernResponsive.css";
import myImage from "../../../assets/responsivebuild.jpg"; 
import { FaMobileAlt, FaPalette, FaGlobe, FaTabletAlt, FaRocket } from "react-icons/fa"; // ✅ Icons

const services = [
  {
    title: "Responsive Layouts",
    desc: "Websites that automatically adapt to any screen size for a seamless user experience.",
    icon: <FaMobileAlt />
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and intuitive designs that improve user interaction and engagement.",
    icon: <FaPalette />
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Ensuring your website works flawlessly across all browsers and platforms.",
    icon: <FaGlobe />
  },
  {
    title: "Mobile-First Development",
    desc: "Designing with mobile devices as the priority for better accessibility.",
    icon: <FaTabletAlt />
  },
  {
    title: "Performance Optimization",
    desc: "Fast-loading, optimized websites for better speed and search engine ranking.",
    icon: <FaRocket />
  }
];

const ModernResponsive = () => {
  return (
    <div className="modern-container">
      <h1 className="modern-heading">Modern Responsive Design</h1>
      {/* <p className="modern-text">
        Build modern, mobile-friendly, and responsive websites that adapt to all
        devices. Our goal is to make sure your brand looks great everywhere.
      </p> */}

      <div className="modern-wrapper">
        {/* ✅ Full Width Image */}
        <img src={myImage} alt="Design showcase" className="modern-image" />

        {/* ✅ Cards Section */}
        <div className="modern-box">
          <h2 className="modern-subHeading">Our Design Services</h2>
          <div className="card-container">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernResponsive;
