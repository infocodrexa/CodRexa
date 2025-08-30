import React from "react";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  const featuresData = [
    {
      id: "live-chat",
      title: "Live Chat",
      description:
        "Real time chatting with customers on website not only builds confidence during their shopping experience, but also helps improve your conversion ratio and creates a strong brand image.",
    },
    {
      id: "lightning-speed",
      title: "Lightning Speed",
      description:
        "Site speed and design are two of the most important ranking factors Google considers, as they influence whether customers stay on site. Faster websites = happier customers.",
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      description:
        "Responsive design ensures your website adapts perfectly to any device—mobile, laptop, desktop, or tablet—delivering a seamless user experience everywhere.",
    },
    {
      id: "payment-gateway",
      title: "Payment Gateway",
      description:
        "Our affordable web design services in India include secure payment gateways, allowing smooth online transfers from customer accounts directly into yours.",
    },
    {
      id: "social-media",
      title: "Social Media",
      description:
        "Extend your social media presence by integrating platforms directly into your website, reaching more customers online and driving higher engagement.",
    },
    {
      id: "247-support",
      title: "24/7 Support",
      description:
        "We provide round-the-clock support to ensure 99.9% uptime of your website, helping you run your business smoothly without interruptions.",
    },
  ];

  return (
    <section className="ad2-features">
      <div className="ad2-container">
        <div className="ad2-row">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="ad2-feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="ad2-icon">{index + 1}</div>
              <h4 className="ad2-title">{feature.title}</h4>
              <p className="ad2-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
