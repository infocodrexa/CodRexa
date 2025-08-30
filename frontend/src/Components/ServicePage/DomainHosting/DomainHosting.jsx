import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Hosting from "../../../assets/HostImg.png";

// ✅ React Icons import
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

  // ✅ Icon mapping
  const iconMap = {
    "Linux and Windows": <FaServer className="text-primary me-2" />,
    "Single Domain": <FaGlobe className="text-success me-2" />,
    "2 Email Accounts": <FaEnvelope className="text-danger me-2" />,
    "5 Email Accounts": <FaEnvelope className="text-danger me-2" />,
    "Free SSL": <FaLock className="text-warning me-2" />,
    "Regular Backups": <FaCloud className="text-info me-2" />,
    "99.99% Uptime": <FaBolt className="text-warning me-2" />,
    "MySQL / SQL Server": <FaDatabase className="text-secondary me-2" />,
    "One Year Hosting": <FaServer className="text-primary me-2" />,
    "Indian Data Center": <FaGlobe className="text-success me-2" />,
  };

  const hostingPlans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: "₹ 2990 / Year",
      bg: "gradient-blue",
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
      bg: "gradient-red",
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
    <div>
      <BackgroundImage
        src={Hosting}
        alt={`hosting image loading`}
        marginTop="80px"
      />

      {/* ✅ Breadcrumbs */}
      <nav
        aria-label="breadcrumb"
        className="bg-light py-2 shadow-sm animate__animated animate__fadeIn">
        <ol className="breadcrumb container">
          {breadcrumbs.map((item, index) => (
            <li
              key={item.id}
              className={`breadcrumb-item ${
                index === breadcrumbs.length - 1
                  ? "active fw-bold text-primary"
                  : ""
              }`}>
              {item.href ? (
                <a href={item.href} className="text-decoration-none text-dark">
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
      <div className="container my-5">
        <h1
          className="fw-bold text-center mb-4 animate__animated animate__fadeInUp"
          data-aos="zoom-in">
          Web Hosting Services
        </h1>
        <div className="row justify-content-center">
          {hostingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="col-md-5 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}>
              <div className="custom-card h-100 d-flex flex-column">
                {/* Header */}
                <div className={`${plan.bg} text-white text-center py-4`}>
                  <h3 className="fw-bold">{plan.name}</h3>
                  <h4 className="fw-bold">{plan.price}</h4>
                </div>

                {/* Body */}
                <div className="card-body flex-grow-1 text-center">
                  <ul className="list-unstyled">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="py-2 border-bottom d-flex align-items-center justify-content-center">
                        {iconMap[feature]} {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="card-footer text-center bg-white border-0">
                  <a
                    href="/feedback"
                    className="btn btn-primary px-4 py-2 fw-bold shadow-sm">
                    Order Now
                  </a>
                  <p className="mt-3 fw-bold text-dark">
                    📞 Call us : +91- 7300423846
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CSS Inside same file */}
      <style jsx>{`
        .custom-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
          min-height: 500px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
        }
        .gradient-blue {
          background: linear-gradient(135deg, #007bff, #00c6ff);
        }
        .gradient-red {
          background: linear-gradient(135deg, #ff416c, #ff4b2b);
        }
        .custom-card ul li {
          font-size: 15px;
          color: #333;
        }
        .custom-card .btn {
          border-radius: 30px;
          transition: all 0.3s ease;
        }
        .custom-card .btn:hover {
          background: #222;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
