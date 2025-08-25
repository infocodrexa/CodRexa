import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Navbar.css";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  return (
    <>
      {/* ===== Top Bar (Contact + Social) ===== */}
      <div className="topbar">
        <div className="topbar-left">
          <span>
            {" "}
            <a
              href="mailto:info@codrexa.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              📧 info@codrexa.com
            </a>
          </span>
          <span className="hid">|</span>
          <span>
            {" "}
            <a
              href="tel:+917300423846"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              📞 +91 73004 23846
            </a>
          </span>
        </div>
        <div className="topbar-right">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF style={{backgroundColor: "#0d6efd", color: "white",width: "2rem",height: "1.5rem"}} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}}  />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube  style={{backgroundColor: "#f00", color: "white",width: "2rem",height: "1.5rem"}} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn style={{backgroundColor: "#0e76a8", color: "white",width: "2rem",height: "1.5rem"}} />
          </a>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" onClick={closeSidebar} className="brand-link">
            <div className="brand-wrapper">
              <img src={logo} alt="CodRexa Logo" className="brand-logo" />
            </div>
          </Link>
        </div>

        <div className="navbar-right">
          <div
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* ===== Desktop Nav ===== */}
        <div className="nav-links-desktop">
          <Link to="/" onClick={closeSidebar}>
            HOME
          </Link>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropbtn">ABOUT ▾</button>
            {dropdownOpen === "about" && (
              <div className="dropdown-content">
                <Link to="/Whyus">Why Us</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/mission">Mission & Vision</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropbtn">SERVICES ▾</button>
            {dropdownOpen === "services" && (
              <div className="dropdown-content">
                <Link to="/web-design">Web Design</Link>
                <Link to="/web-dev">Web Development</Link>
                <Link to="/seo">SEO</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("packages")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropbtn">PACKAGES ▾</button>
            {dropdownOpen === "packages" && (
              <div className="dropdown-content">
                <Link to="/basic">Basic Package</Link>
                <Link to="/premium">Premium Package</Link>
                <Link to="/enterprise">Enterprise Package</Link>
              </div>
            )}
          </div>

          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/enquiry">ENQUIRY</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </nav>

      {/* ===== Mobile Sidebar ===== */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <Link to="/" onClick={closeSidebar} className="brand-link">
            <div className="brand-wrapper">
              <img src={logo} alt="CodRexa Logo" className="brand-logo" />
            </div>
          </Link>
          <FaTimes className="close-btn" onClick={closeSidebar} />
        </div>

        <div className="mobile-menu">
          <Link to="/" onClick={closeSidebar} className="active">
            HOME
          </Link>

          {/* Mobile Accordion - About */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("about")}
            >
              <span>ABOUT</span>
              <span>{mobileDropdownOpen === "about" ? "−" : "+"}</span>
            </div>
            {mobileDropdownOpen === "about" && (
              <div className="mobile-dropdown-content">
                <Link to="/about" onClick={closeSidebar}>
                  About Us
                </Link>
                <Link to="/team" onClick={closeSidebar}>
                  Our Team
                </Link>
                <Link to="/mission" onClick={closeSidebar}>
                  Mission & Vision
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion - Services */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("services")}
            >
              <span>SERVICES</span>
              <span>{mobileDropdownOpen === "services" ? "−" : "+"}</span>
            </div>
            {mobileDropdownOpen === "services" && (
              <div className="mobile-dropdown-content">
                <Link to="/web-design" onClick={closeSidebar}>
                  Web Design
                </Link>
                <Link to="/web-dev" onClick={closeSidebar}>
                  Web Development
                </Link>
                <Link to="/seo" onClick={closeSidebar}>
                  SEO
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion - Packages */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("packages")}
            >
              <span>PACKAGES</span>
              <span>{mobileDropdownOpen === "packages" ? "−" : "+"}</span>
            </div>
            {mobileDropdownOpen === "packages" && (
              <div className="mobile-dropdown-content">
                <Link to="/basic" onClick={closeSidebar}>
                  Basic Package
                </Link>
                <Link to="/premium" onClick={closeSidebar}>
                  Premium Package
                </Link>
                <Link to="/enterprise" onClick={closeSidebar}>
                  Enterprise Package
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={closeSidebar}>
            PORTFOLIO
          </Link>
          <Link to="/blog" onClick={closeSidebar}>
            BLOG
          </Link>
          <Link to="/enquiry" onClick={closeSidebar}>
            ENQUIRY
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
