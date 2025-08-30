import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundImage from "../Background/BackgroundImage";
import RedisignImg from "../../../assets/RedisignImg.png";

export default function Maintenance() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const breadcrumbData = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/" },
    { id: "current", label: "Website Maintenance" },
  ];

  const services = [
    {
      id: "content-updates",
      title: "Content updates",
      description:
        "Consistent & Regular updating of content which is imperative for a successful digital content strategy. Don't worry we will manage this for you so that you can be more focused on your core business.",
    },
    {
      id: "ui-ux",
      title: "UI/UX improvements",
      description:
        "A seamless user interface needs a constant change as per the customer needs which indeed leads to a positive user experience. We have our experts to manage the UI/UX for having the best and satisfied experience.",
    },
    {
      id: "web-security",
      title: "Web Security",
      description:
        'We understand that your website needs a better security and upgradation from time to time as it is rightly said "Prevention is better than cure". We eliminate and prevent threats and vulnerabilities to ensure 100% up-time.',
    },
    {
      id: "testing-monitoring",
      title: "Testing & Monitoring",
      description:
        "Who would live with a Bug? With regular & frequent testing, we ensure your website is user responsive & bug free. Our experts would monitor your Digital assets to ensure 100% uptime.",
    },
    {
      id: "hosting-hassles",
      title: "End Hosting hassles",
      description:
        "Free yourself from any IT issues and cost effective technical support to ensure the website infrastructure is maintained and optimally managed.",
    },
    {
      id: "technical-support",
      title: "Technical Support",
      description:
        "Fast and reliable 24/7 technical support to assist in any website maintenance issues.",
    },
  ];

  const benefits = [
    {
      id: "health",
      text: "Keep your website healthy all time because ",
      highlight: '"health is wealth"',
    },
    {
      id: "time",
      text: "Update or edit your website on short notice because ",
      highlight: '"Time is money"',
    },
    {
      id: "security",
      text: "Protect your website from potential hackers because ",
      highlight: '"Prevention is better than cure"',
    },
    {
      id: "backup",
      text: "Regular backups and on-demand restoration because ",
      highlight: '"Data is gold"',
    },
    {
      id: "performance",
      text: "Constant checks to ensure peak performance because ",
      highlight: '"Performance matters"',
    },
  ];

  // ✅ Change this image with your own
  const benefitIcon = "https://cdn-icons-png.flaticon.com/512/845/845646.png";

  return (
    <div>
      {/* ✅ Hero Banner */}
      <BackgroundImage src={RedisignImg} alt={`image is loading`} />

      {/* ✅ Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="bg-light py-2 shadow-sm"
        data-aos="fade-down">
        <ol className="breadcrumb container">
          {breadcrumbData.map((item, index) => (
            <li
              key={item.id}
              className={`breadcrumb-item ${
                index === breadcrumbData.length - 1
                  ? "active fw-bold text-primary"
                  : ""
              }`}>
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          ))}
        </ol>
      </nav>

      {/* ✅ Main Content */}
      <div className="container my-5">
        <h1 className="fw-bold text-dark mb-4" data-aos="fade-up">
          Website Maintenance Services in Jaipur | Website Redesign India
        </h1>
        <p className="text-muted" data-aos="fade-up">
          Your website needs more care than your car! Our{" "}
          <strong>website maintenance services</strong> are made to meet your
          requirements. Connect with us to work with the experts.
        </p>

        {/* Services Section */}
        <h2 className="fw-bold mt-5 mb-3" data-aos="zoom-in">
          Services
        </h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-md-4 mb-4 d-flex"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div
                className="card h-100 shadow border-0 hover-shadow flex-fill"
                style={{ minWidth: "95%" }}>
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <h2 className="fw-bold mt-5 mb-3" data-aos="zoom-in">
          Benefits
        </h2>
        <p className="text-muted" data-aos="fade-up">
          We help you to capture and measure right data metrics to get
          meaningful insights out of it.
        </p>
        <ul className="list-unstyled">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.id}
              className="mb-3 d-flex align-items-start"
              data-aos="fade-right"
              data-aos-delay={index * 100}>
              <img
                src={benefitIcon} // ✅ your custom icon here
                alt="check"
                className="me-2 mt-1"
                width="24"
              />
              <span>
                {benefit.text} <strong>{benefit.highlight}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
