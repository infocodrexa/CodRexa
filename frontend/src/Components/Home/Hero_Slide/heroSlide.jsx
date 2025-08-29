import React from "react";
import "./heroSlide.css";
import project from "../../../assets/successful-projects.png";
import years from "../../../assets/years.png";
import satisfied from "../../../assets/satisfied-clients.png";
import global from "../../../assets/global-client.png";

const HomeSlide = () => {
  return (
    <section className="home-slide">
      {/* Left Content */}
      <div className="home-left">
        <h1 className="hello-text">Hello,</h1>
        <p className="sub-text">You have found leading</p>
        <h2 className="main-heading">
          Website Designing & Development <br /> Company in Samastipur
        </h2>
        <p className="desc">
          <strong>Codrexa</strong> is a trusted website development company in Samastipur, Bihar. 
          We create professional websites for startups, small businesses, and enterprises.
        </p>
        <p className="desc">
          With over <strong>1 years of experience</strong>, our team of creative developers and designers delivers customized websites tailored to your needs.
        </p>
        <p className="desc">
          We specialize in responsive, user-friendly, and modern web solutions that help your business grow online.
        </p>
        <p className="desc">
          Our team also offers digital marketing and SEO support to maximize your online reach and impact.
        </p>
      </div>

      {/* Right Content - Cards */}
      <div className="home-right">
        <div className="card">
          <img src={years} alt="Experience" className="card-img" />
          <h3>1+</h3>
          <p>Years of Experience</p>
        </div>

        <div className="card">
          <img src={project} alt="Projects" className="card-img" />
          <h3>7+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="card">
          <img src={global} alt="Clients" className="card-img" />
          <h3>5+</h3>
          <p>Clients Served</p>
        </div>

        <div className="card">
          <img src={satisfied} alt="Happy Clients" className="card-img" />
          <h3>5+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;
