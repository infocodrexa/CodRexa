import React from "react";
import "./Smo.css";
import SocialMediaImg from "../../assets/SocialMedia.png";
import socialmm from "../../assets/socialmm.mp4";
import Avvertise from "../../assets/Avvertise.png";
import meetingImage from "../../assets/meeting.png";


// Social media icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTwitter, 
  FaWhatsapp   // FIXED: Added Whatsapp import
} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SiDribbble } from "react-icons/si";

const Smo = () => {
  return (
    <>
      {/* ========== First Section (Orbit + Image) ========== */}
      <div className="smo-section">
        {/* Left Image */}
        <div className="smo-left">
          <img
            src={SocialMediaImg}
            alt="Social Media Optimization"
            className="smo-left-img"
          />
        </div>

        {/* Right Side with Circular Orbit Icons */}
        <div className="smo-right">
          <div className="orbit">
            <div className="smo-icon fb"><FaFacebookF /></div>
            <div className="smo-icon insta"><FaInstagram /></div>
            <div className="smo-icon dribbble"><SiDribbble /></div>
            <div className="smo-icon pin"><FaPinterestP /></div>
            <div className="smo-icon wa"><FaWhatsapp /></div>
            <div className="smo-icon like"><AiFillLike /></div>
          </div>
        </div>
      </div>

      {/* ========== Second Section (Extra Info) ========== */}
      <div className="extra-section">
        <div className="extra-container">
          <div className="extra-text">
            <h2>Grow Your Business with Us</h2>
            <p>
              We provide result-driven <span>digital marketing</span> and 
              <span> social media strategies</span> to boost your online presence. 
              Our solutions help you connect with your audience effectively.
            </p>
            <h3>📍 Address</h3>
            <p className="address">
              Samastipur, Bihar, India
            </p>
          </div>
          <div className="extra-image">
            {/* Autoplay Video */}
            <video 
              src={socialmm} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="extra-video"
            />
          </div>
        </div>
      </div>
        
      {/* ========== Importance Section ========== */}
      <div className="smo-extra">
        <div className="smo-extra-container">
          {/* Left Illustration */}
          <div className="smo-extra-image">
            <img src={Avvertise} alt="Social Media" />
          </div>
          
          {/* Right Text */}
          <div className="smo-extra-text">
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
      <div className="social-section">
        <div className="social-header">
          <h1>Platforms that are We Mostly Use in SMO Services</h1>
          <p>
            We don't need to tell you that you have to use every tool at your disposal if you want an impressive social media presence. 
            That doesn't just apply to your business practices: you also have to use every opportunity of SMM and SMO services in Jaipur. 
            That means creating awareness for your brand or company on several of the most popular social media platforms, such as:
          </p>
        </div>

        <div className="social-container">
          <div className="social-card">
            <div className="social-icon fb"><FaFacebookF /></div>
            <h3>Facebook</h3>
            <p>
              Facebook hardly needs an introduction. One of the oldest and most 
              successful Social Media platforms, marketing your brand on Facebook 
              is almost a recipe for success.
            </p>
          </div>

          <div className="social-card">
            <div className="social-icon insta"><FaInstagram /></div>
            <h3>Instagram</h3>
            <p>
              Instagram marketing helps you target the right audience using 
              hashtags and great visuals, making it perfect for promoting 
              products and services.
            </p>
          </div>

          <div className="social-card">
            <div className="social-icon linkedin"><FaLinkedinIn /></div>
            <h3>LinkedIn</h3>
            <p>
              LinkedIn is best for corporate audiences. It increases visibility 
              of your business, products, events, and services.
            </p>
          </div>

          <div className="social-card">
            <div className="social-icon yt"><FaYoutube /></div>
            <h3>YouTube</h3>
            <p>
              YouTube is perfect for video marketing. Videos generate more 
              engagement and traffic than text, boosting leads quickly.
            </p>
          </div>

          <div className="social-card">
            <div className="social-icon twitter"><FaTwitter /></div>
            <h3>Twitter</h3>
            <p>
              Share short updates and use retweets to spread your content. 
              Great for fast, real-time communication with audiences.
            </p>
          </div>

          <div className="social-card">
            <div className="social-icon pin"><FaPinterestP /></div>
            <h3>Pinterest</h3>
            <p>
              Pinterest boosts PR traffic using images and videos of your 
              products and events. A great platform for instant results.
            </p>
          </div>
        </div>
      </div>

<div 
  className="hero-section"
  style={{ backgroundImage: `url(${meetingImage})` }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>
      Looking for result-oriented Social Media Optimization <br />
      Services in <span className="highlight">Samastipur?</span>
    </h1>
    <h2>Hire Us Today</h2>
    <button
      className="cta-btn"
      onClick={() => (window.location.href = "tel:7300423846")}
    >
      Call to Expert
    </button>

    <h2 className="hero-address">📍 Samastipur, Bihar</h2>
  </div>
</div>

    </>
  );
};

export default Smo;
