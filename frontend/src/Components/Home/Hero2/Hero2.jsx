import React from "react";

import "./Hero2.css";

export function HeroSection() {
  const heroData = {
    title: "GET BEST QUALITY WEBSITE @ JUST ₹7800 IN 1 week",
    features: [
      "– 1 Free Domain",
      "– 7 Page Hosting",
      "– Social Media Integration",
      "– Unlimited Images & Videos",
      "– Unlimited (Bandwidth/ Space)",
      "– 24/7 Support (Phone/Email/Chat)",
      "– Dynamic & Responsive Website",
      "– Payment Gateway Integration",
      "– No Hidden or Extra Charges",
      "– Annual Renewal Rs. 3000",
      "Note: GST @ 18% Applicable on All Purchase",
    ],
    supportInfo:
      "– Phone Support Available in Hindi + English + Bengali + Tamil + Telugu + Kannada + Marathi",
    contactInfo: [
      "For Sales :  7300423846",
      "For Support :  7300423846",
    ],
    ctaButtons: [
      {
        id: "pay-after",
        text: "Pay After Website Up & Running",
        href: "https://www.zauca.com/#pricing",
        type: "primary",
      },
      {
        id: "call-now",
        text: "Sales - Toll Free - Call Us Now",
        href: "tel://18002129495",
        type: "secondary",
      },
    ],
  };

  return (
    <section className="ad-hero">
      <div className="ad-overlay"></div>

      <div className="ad-container">
        <div className="ad-content">
          <h1 className="ad-title">{heroData.title}</h1>

          <p className="ad-features">
            {heroData.features.map((feature, index) => (
              <React.Fragment key={index}>
                {feature}
                <br />
              </React.Fragment>
            ))}
            <br />
            {heroData.supportInfo}
            <br />
            <br />
            {heroData.contactInfo.map((info, index) => (
              <React.Fragment key={index}>
                {info}
                <br />
              </React.Fragment>
            ))}
          </p>

          <div className="ad-buttons">
            {heroData.ctaButtons.map((button) => (
              <a
                key={button.id}
                href={button.href}
                className={`ad-btn ${
                  button.type === "primary" ? "ad-btn-primary" : "ad-btn-secondary"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ad-bottom-icon">
        <img
          src="https://c.animaapp.com/mewld203DPm47P/assets/icon-1.svg"
          alt="icon"
        />
      </div>
    </section>
  );
}
