import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
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
        <div className="footer-section ">
          <img onClick={() => navigate("/")} src={logo} alt="CODREXA" className="footer-logo" />
          <p>
            CODREXA is a reputed and well-established Website Development &
            Design company in Samastipur, India...
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61579396951220">
              <FaFacebookF style={{backgroundColor: "#0d6efd", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
            <a href="https://x.com/cod92570">
                <FaTwitter style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}}  />
            </a>
            <a href="https://www.youtube.com/channel/UCD50PhURsP6FO8Z233595Uw">
              <FaYoutube  style={{backgroundColor: "#f00", color: "white",width: "2rem",height: "1.5rem"}} />
            </a>
            <a href="https://wa.me/+917300423846">
              {/* <FaLinkedinIn style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}} /> */}
              <FaWhatsapp style={{backgroundColor: "#1fbb72ff", color: "white",width: "2rem",height: "1.5rem"}} />
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
            <li><a onClick={() => navigate("/services")} href="#">Services</a></li>
            <li><a onClick={() => navigate("/basic")} href="#">Packages</a></li>
            <li><a onClick={() => navigate("/enquiry")} href="#">Enquiry</a></li>
            <li><a onClick={() => navigate("/contact")} href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a onClick={() => navigate("/services/redesign")} href="#">Static Website Design</a></li>
            <li><a onClick={() => navigate("/services/redesign")} href="#">Dynamic Website Design</a></li>
            <li><a onClick={() => navigate("/services/ecommerce-dev")} href="#">E-Commerce Website</a></li>
            <li><a onClick={() => navigate("/services/seo")} href="#">SEO</a></li>
            <li><a onClick={() => navigate("/services/seo")} href="#">Local SEO Services</a></li>
            <li><a onClick={() => navigate("/services/affiliate-marketing")} href="#">Digital Marketing</a></li>
            <li><a onClick={() => navigate("/services/domain-hosting")} href="#">Web Domain & Hosting</a></li>
            <li><a onClick={() => navigate("/services/ios")} href="#">Mobile App Development</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            📍 1st floor,Near HP Petrol Pump <br />Harpur Ailoth Samastipur - 848101 
          </p>
          <p>✉ infocodrexa@gmail.com</p>
          <p>📱 7300423846</p>

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
