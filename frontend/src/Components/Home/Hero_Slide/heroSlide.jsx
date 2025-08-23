import React from "react";
import { FaAward, FaUsers, FaRegSmile } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import "./heroSlide.css";   

const HomeSlide = () => {
  return (
    <section className="home-slide">
      <div className="home-left">
        <h1 className="hello-text">Hello,</h1>
        <p className="sub-text">You have found leading</p>
        <h2 className="main-heading">
          Website Designing & Development <br /> Company in Jaipur
        </h2>
        <p className="desc">
          A R Infotech is a reputed and reliable{" "}
          <strong>website development company in Jaipur, India.</strong> We are
          capable of developing all types of websites from basic HTML, WordPress
          to customized online selling and inventory management systems with
          drivers tracking.
        </p>
        <p className="desc">
          We have been designing websites for the last 15 years. We have a team
          of experienced and creative web designers and developers. We create
          customized websites as your need.
        </p>
        <p className="desc">
          We have worked with many brands worldwide for their website designing
          needs. We specialize in creating responsive and creative websites. We
          have built a reputation for providing innovative{" "}
          <strong>Web development services in Jaipur.</strong>
        </p>
        <p className="desc">
          Our team uses technology and creative ideas to bring results. Our team
          not only works on designing part. We also offer you customized
          marketing solutions.
        </p>
      </div>

      <div className="home-right">
        <div className="card">
          <FaAward className="icon blue" />
          <h3>1+</h3>
          <p>Years of Work Experience</p>
        </div>

        <div className="card">
          <HiDocumentText className="icon green" />
          <h3>5+</h3>
          <p>Project Completed</p>
        </div>

        <div className="card">
          <FaUsers className="icon orange" />
          <h3>7+</h3>
          <p>Global Clients</p>
        </div>

        <div className="card">
          <FaRegSmile className="icon pink" />
          <h3>4+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;
