import React, { useState } from "react";
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

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section about">
          <img src={logo} alt="CODREXA" className="footer-logo" />
          <p>
            A R Infotech is a reputed and well-established Website Development &
            Design company in Jaipur, India...
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61579396951220">
              <FaFacebookF />
            </a>
            <a href="https://x.com/cod92570">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/codrexa?utm_source=qr&igsh=MXFsamFrazNhODZpYQ==">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Enquiry</a></li>
            <li><a href="#">Contact Us</a></li>
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
