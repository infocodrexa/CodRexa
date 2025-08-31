import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DomainHosting.css"

import Hosting from "../../../assets/HostImg.png";
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

export default function DomainHosting() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const breadcrumbs = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/" },
    { id: "current", label: "Web Hosting" },
  ];

  const iconMap = {
    "Linux and Windows": <FaServer />,
    "Single Domain": <FaGlobe />,
    "2 Email Accounts": <FaEnvelope />,
    "5 Email Accounts": <FaEnvelope />,
    "Free SSL": <FaLock />,
    "Regular Backups": <FaCloud />,
    "99.99% Uptime": <FaBolt />,
    "MySQL / SQL Server": <FaDatabase />,
    "One Year Hosting": <FaServer />,
    "Indian Data Center": <FaGlobe />,
  };

  const hostingPlans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: "₹ 2990 / Year",
      bg: "domain-hosting__card-header--blue",
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
      bg: "domain-hosting__card-header--red",
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
    <div className="domain-hosting">
      {/* ✅ Hero Banner */}
      <BackgroundImage
        src={Hosting}
        alt="hosting image loading"
        type="1200x300"
        marginTop="40px"
      />

      {/* ✅ Breadcrumbs */}
      <nav className="domain-hosting__breadcrumbs animate__animated animate__fadeIn">
        <ol className="domain-hosting__breadcrumb-list">
          {breadcrumbs.map((item, index) => (
            <li
              key={item.id}
              className={`domain-hosting__breadcrumb-item ${
                index === breadcrumbs.length - 1
                  ? "domain-hosting__breadcrumb-item--active"
                  : ""
              }`}
            >
              {item.href ? (
                <a href={item.href} className="domain-hosting__breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ✅ Hosting Plans */}
      <div className="domain-hosting__container">
        <h1
          className="domain-hosting__title animate__animated animate__fadeInUp"
          data-aos="zoom-in"
        >
          Web Hosting Services
        </h1>

        <div className="domain-hosting__plans">
          {hostingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="domain-hosting__card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Header */}
              <div className={`domain-hosting__card-header ${plan.bg}`}>
                <h3 className="domain-hosting__card-name">{plan.name}</h3>
                <h4 className="domain-hosting__card-price">{plan.price}</h4>
              </div>

              {/* Body */}
              <div className="domain-hosting__card-body">
                <ul className="domain-hosting__features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="domain-hosting__feature">
                      <span className="domain-hosting__feature-icon">
                        {iconMap[feature]}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="domain-hosting__card-footer">
                <a href="/feedback" className="domain-hosting__btn">
                  Order Now
                </a>
                <p className="domain-hosting__contact">
                  📞 Call us : +91- 7300423846
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
