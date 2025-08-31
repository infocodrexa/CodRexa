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
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      {/* ===== Top Bar (Contact + Social) ===== */}
      <div className="topbar">
        <div className="topbar-left">
          <span>
            <a
              href="mailto:info@codrexa.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              📧 info@codrexa.com
            </a>
          </span>
          <span className="hid">|</span>
          <span>
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
                <Link to="/Whyus" onClick={closeSidebar}>Why Us</Link>
                <Link to="/team" onClick={closeSidebar}>Our Team</Link>
                <Link to="/mission" onClick={closeSidebar}>About CodRex</Link>
              </div>
            )}
          </div>

          {/* ====== SERVICES Mega Menu ====== */}
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropbtn">SERVICES ▾</button>
            {dropdownOpen === "services" && (
              <div className="mega-dropdown">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>DIGITAL MARKETING SERVICES</h4>
                  <Link to="/services/seo" onClick={closeSidebar}>SEO</Link>
                  <Link to="/services/smo" onClick={closeSidebar}>Social Media Optimization</Link>
                  <Link to="/services/local-seo" onClick={closeSidebar}>Local SEO Services</Link>
                  <Link to="/services/content-marketing" onClick={closeSidebar}>Content Marketing</Link>
                  <Link to="/services/orm" onClick={closeSidebar}>ORM</Link>
                  <Link to="/services/link-building" onClick={closeSidebar}>Link Building</Link>
                  <Link to="/services/website-optimization" onClick={closeSidebar}>Website Optimization</Link>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>WEBSITE DESIGN & DEV</h4>
                  <Link to="/services/modern-responsive" onClick={closeSidebar}>Modern & Responsive</Link>
                  <Link to="/services/ecommerce-dev" onClick={closeSidebar}>E-Commerce</Link>
                  <Link to="/services/wordpress-shopify" onClick={closeSidebar}>WordPress/Shopify</Link>
                  <Link to="/services/crm" onClick={closeSidebar}>Custom CRM</Link>
                  <Link to="/services/web-dev" onClick={closeSidebar}>Web Development</Link>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>PAID MARKETING</h4>
                  <Link to="/services/ppc" onClick={closeSidebar}>PPC</Link>
                  <Link to="/services/fb-twitter-ads" onClick={closeSidebar}>FB/Twitter Ads</Link>
                  <Link to="/services/adwords-express" onClick={closeSidebar}>AdWords Express</Link>
                  <Link to="/services/display-ads" onClick={closeSidebar}>Display/Search Ads</Link>
                  <Link to="/services/shopping-ads" onClick={closeSidebar}>Shopping Ads</Link>
                  <Link to="/services/lead-marketing" onClick={closeSidebar}>Lead Marketing</Link>
                  <Link to="/services/youtube-promotion" onClick={closeSidebar}>YouTube Promotion</Link>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>MOBILE APPS</h4>
                  <Link to="/services/android" onClick={closeSidebar}>Android</Link>
                  <Link to="/services/ios" onClick={closeSidebar}>iOS</Link>
                  <Link to="/services/app-store-optimization" onClick={closeSidebar}>App Store Optimization</Link>

                  <h4 style={{ marginTop: "12px" }}>E-COMMERCE</h4>
                  <Link to="/services/marketplace-listing" onClick={closeSidebar}>Marketplace Listing</Link>
                  <Link to="/services/amazon-flipkart" onClick={closeSidebar}>Amazon/Flipkart</Link>
                  <Link to="/services/affiliate-marketing" onClick={closeSidebar}>Affiliate Marketing</Link>

                  <h4 style={{ marginTop: "12px" }}>ADD ONS</h4>
                  <Link to="/services/redesign" onClick={closeSidebar}>Website Redesign</Link>
                  <Link to="/services/maintenance" onClick={closeSidebar}>Maintenance</Link>
                  <Link to="/services/domain-hosting" onClick={closeSidebar}>Domain & Hosting</Link>
                  <Link to="/services/ssl" onClick={closeSidebar}>SSL</Link>
                </div>
              </div>
            )}
          </div>
          {/* ===== End Services ===== */}

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("packages")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropbtn">PACKAGES ▾</button>
            {dropdownOpen === "packages" && (
              <div className="dropdown-content">
                <Link to="/basic" onClick={closeSidebar}>Basic Package</Link>
                <Link to="/premium" onClick={closeSidebar}>Premium Package</Link>
                <Link to="/enterprise" onClick={closeSidebar}>Enterprise Package</Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={closeSidebar}>PORTFOLIO</Link>
          <Link to="/blog" onClick={closeSidebar}>BLOG</Link>
          <Link to="/enquiry" onClick={closeSidebar}>ENQUIRY</Link>
          <Link to="/contact" onClick={closeSidebar}>CONTACT US</Link>
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
            <button
              className="mobile-dropbtn"
              onClick={() =>
                setDropdownOpen(dropdownOpen === "about" ? null : "about")
              }
            >
              ABOUT ▾
            </button>
            {dropdownOpen === "about" && (
              <div className="mobile-mega">
                <Link to="/Whyus" onClick={closeSidebar}>Why Us</Link>
                <Link to="/team" onClick={closeSidebar}>Our Team</Link>
                <Link to="/mission" onClick={closeSidebar}>About CodRex</Link>
              </div>
            )}
          </div>

          <hr className="nav-divider" />

          {/* Mobile Accordion - Services */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropbtn"
              onClick={() =>
                setDropdownOpen(dropdownOpen === "services" ? null : "services")
              }
            >
              SERVICES ▾
            </button>
            {dropdownOpen === "services" && (
              <div className="mobile-mega">
                <h4>DIGITAL MARKETING</h4>
                <Link to="/services/seo" onClick={closeSidebar}>SEO</Link>
                <Link to="/services/smo" onClick={closeSidebar}>SMO</Link>
                <Link to="/services/local-seo" onClick={closeSidebar}>Local SEO</Link>
                <Link to="/services/content-marketing" onClick={closeSidebar}>Content</Link>
                <Link to="/services/orm" onClick={closeSidebar}>ORM</Link>
                <Link to="/services/link-building" onClick={closeSidebar}>Link Building</Link>

                <h4>WEBSITE DESIGN</h4>
                <Link to="/services/modern-responsive" onClick={closeSidebar}>Modern & Responsive</Link>
                <Link to="/services/ecommerce-dev" onClick={closeSidebar}>E-Commerce</Link>
                <Link to="/services/wordpress-shopify" onClick={closeSidebar}>WordPress/Shopify</Link>
                <Link to="/crm" onClick={closeSidebar}>Custom CRM</Link>

                <h4>PAID MARKETING</h4>
                <Link to="/services/ppc" onClick={closeSidebar}>PPC</Link>
                <Link to="/services/fb-twitter-ads" onClick={closeSidebar}>FB/Twitter Ads</Link>
                <Link to="/services/adwords-express" onClick={closeSidebar}>AdWords Express</Link>

                <h4>MOBILE APPS</h4>
                <Link to="/services/android" onClick={closeSidebar}>Android</Link>
                <Link to="/services/ios" onClick={closeSidebar}>iOS</Link>
                <Link to="/services/app-store-optimization" onClick={closeSidebar}>App Store Optimization</Link>
              </div>
            )}
          </div>

          <hr className="nav-divider" />

          {/* Mobile Accordion - Packages */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropbtn"
              onClick={() =>
                setDropdownOpen(dropdownOpen === "packages" ? null : "packages")
              }
            >
              PACKAGES ▾
            </button>
            {dropdownOpen === "packages" && (
              <div className="mobile-mega">
                <Link to="/basic" onClick={closeSidebar}>Basic Package</Link>
                <Link to="/premium" onClick={closeSidebar}>Premium Package</Link>
                <Link to="/enterprise" onClick={closeSidebar}>Enterprise Package</Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={closeSidebar}>PORTFOLIO</Link>
          <Link to="/blog" onClick={closeSidebar}>BLOG</Link>
          <Link to="/enquiry" onClick={closeSidebar}>ENQUIRY</Link>
          <Link to="/contact" onClick={closeSidebar}>CONTACT US</Link>
        </div>
      </div>
    </>
  );
}
