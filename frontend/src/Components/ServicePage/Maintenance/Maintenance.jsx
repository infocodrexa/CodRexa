import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundImage from "../Background/BackgroundImage";
import RedisignImg from "../../../assets/RedisignImg.png";
import "./Maintenance.css"; 

export default function Maintenance() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

  const benefitIcon = "https://cdn-icons-png.flaticon.com/512/845/845646.png";

  return (
    <div className="maintenance">
      {/* ✅ Hero Banner */}
      <BackgroundImage
        src={RedisignImg}
        alt="image is loading"
        type="1200x300"
        marginTop="40px"
      />

      {/* ✅ Main Content */}
      <div className="maintenance__container">
        <h1 className="maintenance__title" data-aos="fade-up">
          Website Maintenance Services in Samastipur | Website Redesign India
        </h1>
        <p className="maintenance__subtitle" data-aos="fade-up">
          Your website needs more care than your car! Our{" "}
          <strong>website maintenance services</strong> are made to meet your
          requirements. Connect with us to work with the experts.
        </p>

        {/* Services Section */}
        <h2 className="maintenance__section-title" data-aos="zoom-in">
          Services
        </h2>
        <div className="maintenance__services">
          {services.map((service, index) => (
            <div
              className="maintenance__service-card"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="maintenance__service-content">
                <h5 className="maintenance__service-title">{service.title}</h5>
                <p className="maintenance__service-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <h2 className="maintenance__section-title" data-aos="zoom-in">
          Benefits
        </h2>
        <p className="maintenance__subtitle" data-aos="fade-up">
          We help you to capture and measure right data metrics to get
          meaningful insights out of it.
        </p>
        <ul className="maintenance__benefits">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.id}
              className="maintenance__benefit-item"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <img
                src={benefitIcon}
                alt="check"
                className="maintenance__benefit-icon"
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
