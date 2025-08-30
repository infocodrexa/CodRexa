import React from "react";
import { FaGlobe, FaAndroid, FaBullhorn, FaNetworkWired } from "react-icons/fa";
import "./ServicesSection.css"; // import CSS file

export function ServicesSection() {
  return (
    <section className="sev-services">
      <div className="sev-container">
        {/* Title */}
        <h2 className="sev-title">A few things we’re great at</h2>

        {/* Services Grid */}
        <div className="sev-grid">
          {/* Service 1 */}
          <div className="sev-item">
            <div className="sev-icon">
              <FaGlobe />
            </div>
            <div>
              <h5 className="sev-heading">WEBSITE DESIGN</h5>
              <p>
                We have provided website design to more than 5,900+ businesses
                across industries. Based in the IT hub of India, we pride
                ourselves on creativity and aesthetics, making us a leading
                website design agency in India.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="sev-item">
            <div className="sev-icon">
              <FaAndroid />
            </div>
            <div>
              <h5 className="sev-heading">ANDROID APP DEVELOPMENT</h5>
              <p>
                We are a leading Android app development company. With 70% of
                smartphones running on Android, we deliver secure, high-quality
                apps to help your business expand.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="sev-item">
            <div className="sev-icon">
              <FaBullhorn />
            </div>
            <div>
              <h5 className="sev-heading">DIGITAL MARKETING</h5>
              <p>
                An honest & results-driven digital marketing agency. We provide
                SEO and digital marketing services that are transparent and
                tailored for your business growth.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="sev-item">
            <div className="sev-icon">
              <FaNetworkWired />
            </div>
            <div>
              <h5 className="sev-heading">AD NETWORK SETUP</h5>
              <p>
                We help you set up Ad Networks so you can earn from your website
                or blog. Ad Serving enables you to generate revenue from your
                existing traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
