import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaUserCircle,
} from "react-icons/fa";
import logo from "./assets/logo.png";
import AuthModal from "./User/AuthModal"; // ✅ ProfileModal ki jagah AuthModal use karo

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section about">
          <img onClick={() => navigate("/")} src={logo} alt="CODREXA" className="footer-logo" />
          <p>
            A R Infotech is a reputed and well-established Website Development &
            Design company in Jaipur, India...
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61579396951220">
              <FaFacebookF style={{backgroundColor: "#0d6efd", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
            <a href="https://x.com/cod92570">
                <FaTwitter style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}}  />
            </a>
            <a href="#">
              <FaYoutube  style={{backgroundColor: "#f00", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
            <a href="#">
              <FaLinkedinIn style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
            <a href="https://www.instagram.com/codrexa?utm_source=qr&igsh=MXFsamFrazNhODZpYQ==">
              <FaInstagram style={{backgroundColor: "#bb1f65ff", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick links</h3>
          <ul>
            <li><a onClick={() => navigate("/")} href="#">Home</a></li>
            <li><a onClick={() => navigate("/Whyus")} href="#">About</a></li>
            <li><a onClick={() => navigate("/web-design")} href="#">Services</a></li>
            <li><a onClick={() => navigate("/basic")} href="#">Packages</a></li>
            <li><a onClick={() => navigate("/portfolio")} href="#">Portfolio</a></li>
            <li><a onClick={() => navigate("/blog")} href="#">Blog</a></li>
            <li><a onClick={() => navigate("/enquiry")} href="#">Enquiry</a></li>
            <li><a onClick={() => navigate("/contact")} href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Static Website Design</a></li>
            <li><a href="#">Dynamic Website Design</a></li>
            <li><a href="#">E-Commerce Website</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Local SEO Services</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Web Domain & Hosting</a></li>
            <li><a href="#">Mobile App Development</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            📍 1st floor, 13/516, Kaveri Path, Mansarovar Sector 1, Mansarovar,
            Jaipur, Rajasthan 302020
          </p>
          <p>✉ infocodrexa@gmail.com</p>
          <p>📱 7300423846</p>
          <p>☎ +91-0141-4920437</p>

          {/* User Icon with click event */}
          <p style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>
            <FaUserCircle style={{ color: "red", marginRight: "5px" }} /> Admin Login 
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} CODREXA. All Rights Reserved.
        </p>
      </div>

      {/* Auth Modal */}
      {modalOpen && <AuthModal closeModal={() => setModalOpen(false)} />}
    </footer>
  );
};

export default Footer;
