import React from "react";
import "./BusinessPricing.css";
import BusinessPricingSection1 from "../../../assets/BusinessPricingSection1.png"; // top banner
import BusinessPricingSection2 from "../../../assets/BusinessPricingSection2.png"; // top banner
import BusinessPricingSection3 from "../../../assets/BusinessPricingSection3.png"; // top banner

export function BusinessPricingSection() {
  const businessPricingData = {
    title: "Business Website Design Price",
    subtitle:
      'Zauca is India\'s most affordable, low cost web design company in India offering website designing with Unbeatable "Pricing"',
    plans: [
      {
        id: "basic",
        name: "Basic Plan – ₹7800",
        image: BusinessPricingSection1,
        features: `– 1 Free Domain Name<br />
<b>– 10 Page (Dynamic Website)</b><br />
– Business Email id (Webmail)<br />
– Unlimited Images & Videos<br />
– Unlimited (Bandwidth/ Space)<br />
– 100% Responsive Website<br />
– Payment Gateway Integration<br />
– Social Media Integration</b><br />
– 24/7 Support (<b>SLA:</b> 48 Hours)<br />
– Annual Renewal ₹3000<br /><br />
Note: GST @ 18% Applicable on All Purchase`,
        ctaText: "Get Quote Now",
        ctaLink: "#",
      },
      {
        id: "classic",
        name: "Classic Plan – ₹8800",
        image: BusinessPricingSection2,
        features: `– 1 Free Domain Name<br />
<b>– UL (15) Pages* (Dynamic Website)</b><br />
– Business Email id (Webmail)<br />
– Unlimited Images & Videos<br />
– Unlimited (Bandwidth/ Space)<br />
– 100% Responsive Website<br />
– Payment Gateway Integration<br />
– Social Media Integration<br />
<b>– WhatsApp Integration<br />
– SSL Certificate</b><br />
– 24/7 Support (<b>SLA:</b> 24 Hours)<br />
– Annual Renewal ₹4000<br /><br />
Note: GST @ 18% Applicable on All Purchase`,
        ctaText: "Get Quote Now",
        ctaLink: "#",
      },
      {
        id: "premium",
        name: "Premium Plan – ₹14300",
        image: BusinessPricingSection3,
        features: `– 1 Free Domain Name<br />
– UL (20) Pages* (Dynamic Website)<br />
<b>– Unlimited Email id (Webmail/ Outlook)<br />
– Android Application*</b><br />
– Unlimited Images & Videos<br />
– Unlimited (Bandwidth/ Space)<br />
– 100% Responsive Website<br />
– Payment Gateway Integration<br />
– Social Media Integration<br />
– WhatsApp Integration<br />
– SSL Certificate<br />
<b>– cPanel* Access</b><br />
– 24/7 Support (<b>SLA:</b> 12 Hours)<br />
– Annual Renewal ₹5000<br /><br />
Note: GST @ 18% Applicable on All Purchase`,
        ctaText: "Get Quote Now",
        ctaLink: "#",
      },
    ],
  };

  return (
    <section className="pricing">
      <div className="pricing__container">
        {/* Header */}
        <div className="pricing__header">
          <h2 className="pricing__title">{businessPricingData.title}</h2>
          <p className="pricing__subtitle">{businessPricingData.subtitle}</p>
        </div>

        {/* Plans */}
        <div className="pricing__plans">
          {businessPricingData.plans.map((plan) => (
            <div key={plan.id} className="pricing__plan">
              {plan.image && (
                <a href={plan.ctaLink} className="pricing__plan-imageLink">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="pricing__plan-image"
                  />
                </a>
              )}
              <div className="pricing__plan-content">
                <h4 className="pricing__plan-name">{plan.name}</h4>
                <p
                  className="pricing__plan-features"
                  dangerouslySetInnerHTML={{ __html: plan.features }}
                />
                <a href={plan.ctaLink} className="pricing__plan-cta">
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
