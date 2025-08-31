import React from "react";
import "./Smo.css"; 
import SocialMediaImg from "../../../assets/SocialMedia.png";
import socialmm from "../../../assets/socialmm.mp4";
import Avvertise from "../../../assets/Avvertise.png";
import meetingImage from "../../../assets/meeting.png";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SiDribbble } from "react-icons/si";

const SocialMediaOptimization = () => {
  return (
    <>
      {/* ========== First Section (Orbit + Image) ========== */}
      <div className="s-m-o-wrapper">
        {/* Left Image */}
        <div className="s-m-o-left-pane">
          <img
            src={SocialMediaImg}
            alt="Social Media Optimization"
            className="s-m-o-featured-image"
          />
        </div>

        {/* Right Side with Circular Orbit Icons */}
        <div className="s-m-o-right-pane">
          <div className="s-m-o-icon-orbit">
            <div className="s-m-o-orbiting-icon fb"><FaFacebookF /></div>
            <div className="s-m-o-orbiting-icon insta"><FaInstagram /></div>
            <div className="s-m-o-orbiting-icon dribbble"><SiDribbble /></div>
            <div className="s-m-o-orbiting-icon pin"><FaPinterestP /></div>
            <div className="s-m-o-orbiting-icon wa"><FaWhatsapp /></div>
            <div className="s-m-o-orbiting-icon like"><AiFillLike /></div>
          </div>
        </div>
      </div>

      {/* ========== Second Section (Extra Info) ========== */}
      <div className="s-m-o-info-section">
        <div className="s-m-o-info-container">
          <div className="s-m-o-info-text-block">
            <h2>Grow Your Business with Us</h2>
            <p>
              We provide result-driven <span>digital marketing</span> and
              <span> social media strategies</span> to boost your online presence.
              Our solutions help you connect with your audience effectively.
            </p>
            <h3>📍 Address</h3>
            <p className="s-m-o-location-address">
              Samastipur, Bihar, India
            </p>
          </div>
          <div className="s-m-o-info-media-block">
            {/* Autoplay Video */}
            <video
              src={socialmm}
              autoPlay
              loop
              muted
              playsInline
              className="s-m-o-info-video"
            />
          </div>
        </div>
      </div>

      {/* ========== Importance Section ========== */}
      <div className="s-m-o-benefits-section">
        <div className="s-m-o-benefits-container">
          {/* Left Illustration */}
          <div className="s-m-o-benefits-image-block">
            <img src={Avvertise} alt="Social Media" />
          </div>

          {/* Right Text */}
          <div className="s-m-o-benefits-text-block">
            <h2>Importance of <span>Social Media Optimization</span></h2>
            <p>
              There is a question in every businessman's mind! <br />
              <strong>"Is Social Media Optimization Important?"</strong>
            </p>
            <p>
              You can bring in more new customers and relevant traffic by sharing your
              content on social media through SMO. Even if you have a new business,
              social media optimization increases visibility of your products and services
              and brings in new leads effectively.
            </p>
            <h3>Benefits of Using Professional SMO Services</h3>
            <ul>
              <li>Introduce your brand.</li>
              <li>Promote your products and services.</li>
              <li>Increase traffic & brand awareness.</li>
              <li>Engage with your target audience effectively.</li>
              <li>Boost conversions through social media campaigns.</li>
              <li>Improve your online reputation & trust.</li>
              <li>Stay ahead of competitors with smart strategies.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========== Social Platforms Section ========== */}
      <div className="s-m-o-platforms-section">
        <div className="s-m-o-platforms-header">
          <h1>Platforms that are We Mostly Use in SMO Services</h1>
          <p>
            We don't need to tell you that you have to use every tool at your disposal if you want an impressive social media presence.
            That doesn't just apply to your business practices: you also have to use every opportunity of SMM and SMO services in Jaipur.
            That means creating awareness for your brand or company on several of the most popular social media platforms, such as:
          </p>
        </div>
        <div className="s-m-o-platforms-grid">
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon fb"><FaFacebookF /></div>
            <h3>Facebook</h3>
            <p>
              Facebook hardly needs an introduction. One of the oldest and most
              successful Social Media platforms, marketing your brand on Facebook
              is almost a recipe for success.
            </p>
          </div>
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon insta"><FaInstagram /></div>
            <h3>Instagram</h3>
            <p>
              Instagram marketing helps you target the right audience using
              hashtags and great visuals, making it perfect for promoting
              products and services.
            </p>
          </div>
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon linkedin"><FaLinkedinIn /></div>
            <h3>LinkedIn</h3>
            <p>
              LinkedIn is best for corporate audiences. It increases visibility
              of your business, products, events, and services.
            </p>
          </div>
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon yt"><FaYoutube /></div>
            <h3>YouTube</h3>
            <p>
              YouTube is perfect for video marketing. Videos generate more
              engagement and traffic than text, boosting leads quickly.
            </p>
          </div>
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon twitter"><FaTwitter /></div>
            <h3>Twitter</h3>
            <p>
              Share short updates and use retweets to spread your content.
              Great for fast, real-time communication with audiences.
            </p>
          </div>
          <div className="s-m-o-platform-card">
            <div className="s-m-o-platform-icon pin"><FaPinterestP /></div>
            <h3>Pinterest</h3>
            <p>
              Pinterest boosts PR traffic using images and videos of your
              products and events. A great platform for instant results.
            </p>
          </div>
        </div>
      </div>

      {/* ========== Hero Section ========== */}
      <div
        className="s-m-o-hero-banner"
        style={{ backgroundImage: `url(${meetingImage})` }}
      >
        <div className="s-m-o-hero-banner-overlay"></div>
        <div className="s-m-o-hero-banner-content">
          <h1>
            Looking for result-oriented Social Media Optimization <br />
            Services in <span className="s-m-o-highlighted-text">Samastipur?</span>
          </h1>
          <h2>Hire Us Today</h2>
          <button
            className="s-m-o-call-to-action-button"
            onClick={() => (window.location.href = "tel:7300423846")}
          >
            Call to Expert
          </button>
          <h2 className="s-m-o-hero-banner-address">📍 Samastipur, Bihar</h2>
        </div>
      </div>
    </>
  );
};

export default SocialMediaOptimization;