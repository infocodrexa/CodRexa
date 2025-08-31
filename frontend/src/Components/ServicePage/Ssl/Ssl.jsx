import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ React Icons
import {
  FaGlobe,
  FaEnvelope,
  FaLock,
  FaServer,
  FaCloud,
  FaBolt,
  FaDatabase,
} from "react-icons/fa";
import BackgroundImage from "../Background/BackgroundImage";
import Hosting from "../../../assets/ssl.png";

import "./Ssl.css"; // ✅ custom CSS

export default function Ssl() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const breadcrumbs = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/" },
    { id: "current", label: "Web Hosting" },
  ];

  // ✅ Icon mapping
  const iconMap = {
    "Linux and Windows": <FaServer className="ssl__icon" />,
    "Single Domain": <FaGlobe className="ssl__icon" />,
    "2 Email Accounts": <FaEnvelope className="ssl__icon" />,
    "5 Email Accounts": <FaEnvelope className="ssl__icon" />,
    "Free SSL": <FaLock className="ssl__icon" />,
    "Regular Backups": <FaCloud className="ssl__icon" />,
    "99.99% Uptime": <FaBolt className="ssl__icon" />,
    "MySQL / SQL Server": <FaDatabase className="ssl__icon" />,
    "One Year Hosting": <FaServer className="ssl__icon" />,
    "Indian Data Center": <FaGlobe className="ssl__icon" />,
  };

  const hostingPlans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: "₹ 2990 / Year",
      bg: "ssl__card-header--blue",
      features: [
        "Linux and Windows",
        "Single Domain",
        "2 Email Accounts",
        "One Year Hosting",
        "Indian Data Center",
        "Regular Backups",
        "99.99% Uptime",
      ],
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: "₹ 3990 / Year",
      bg: "ssl__card-header--red",
      features: [
        "Linux and Windows",
        "Single Domain",
        "5 Email Accounts",
        "MySQL / SQL Server",
        "Free SSL",
        "One Year Hosting",
        "Indian Data Center",
        "Regular Backups",
        "99.99% Uptime",
      ],
    },
  ];

  return (
    <div className="ssl">
      {/* ✅ Hero Banner */}
      <BackgroundImage src={Hosting} alt="hosting" type="1200x300" marginTop="40px" />

      {/* ✅ Breadcrumbs */}
      <nav
        aria-label="breadcrumb"
        className="ssl__breadcrumbs animate__animated animate__fadeIn"
      >
        <ol className="ssl__breadcrumb-list">
          {breadcrumbs.map((item, index) => (
            <li
              key={item.id}
              className={`ssl__breadcrumb-item ${
                index === breadcrumbs.length - 1
                  ? "ssl__breadcrumb-item--active"
                  : ""
              }`}
            >
              {item.href ? (
                <a href={item.href} className="ssl__breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ✅ Hosting Plans */}
      <div className="ssl__container">
        <h1
          className="ssl__title animate__animated animate__fadeInUp"
          data-aos="zoom-in"
        >
          Web Hosting Services
        </h1>

        <div className="ssl__plans">
          {hostingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="ssl__card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Header */}
              <div className={`ssl__card-header ${plan.bg}`}>
                <h3 className="ssl__card-name">{plan.name}</h3>
                <h4 className="ssl__card-price">{plan.price}</h4>
              </div>

              {/* Body */}
              <div className="ssl__card-body">
                <ul className="ssl__features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="ssl__feature">
                      {iconMap[feature]} {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="ssl__card-footer">
                <a href="/feedback" className="ssl__btn">
                  Order Now
                </a>
                <p className="ssl__contact">📞 Call us : +91- 7300423846</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
