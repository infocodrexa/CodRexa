import React from "react";
import "./AboutSection.css";
import ab1 from "../../../assets/ab2.jpg"
import ab2 from "../../../assets/ab3.jpg"

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h5>About CodRexa</h5>
          <h2>
            India’s No 1{" "}
            <span className="highlight">Website Design</span> Company
          </h2>
          <p className="sub-heading">Successfully Delivered 50+ Websites</p>
          <p>
            CodRexa offers a wide range of website design services in India
            including business website designing, personal blogs, web portals,
            e-commerce websites, static and dynamic websites across all
            categories & sectors.
          </p>
        </div>

        {/* Image Section */}
        <div className="about-images">
          <a href="#">
            <img
            className="ab1"
              src={ab1}
              alt="Digital Marketing"
            />
          </a>
          <a href="#">
            <img
            className="ab2"
              src={ab2}
              alt="Web Design Company"
            />
          </a>
          <a href="#">
            <img
            className="ab3"
              src={ab2}
              alt="More Web Design"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
