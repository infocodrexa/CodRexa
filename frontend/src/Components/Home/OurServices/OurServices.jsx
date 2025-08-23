import "./OurServices.css";

export default function OurServices() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Left Content */}
        <div className="services-left">
          <h4 className="sub-title">OUR SERVICE</h4>
          <h2 className="main-title">
            We Offer Affordable – <br />
            <span>Web Development,</span> <br />
            <span>Mobile App Development &</span> <br />
            <span>Digital Marketing Solutions in India.</span>
          </h2>
          <p>
            There isn't any free service. We need to invest in our business and
            marketing. We design solutions in such a manner where you get the
            complete package. We customize cost-efficient packages for our
            client's business needs.
          </p>
          <p>
            Our affordable website designing, development and maintenance
            service will give you a long term solution and save your money &
            time.
          </p>
          <p>
            Our company offers you a complete package. We are the top-most{" "}
            <b>website development company Jaipur India.</b>
          </p>
          <p>
            We also consult you and help you to grow your business online. Our
            web designs are engaging and most creative.
          </p>
          <p>
            Many companies have grown through our{" "}
            <a href="#">web development services.</a>
          </p>

          <button className="cta-btn">🎧 Get A Free Quote</button>
        </div>

        {/* Right Service Cards */}
        <div className="services-right">
          <div className="service-card">
            {/* <img src="/icons/ecommerce.png" alt="E-commerce" /> */}
            <h3>E-Commerce Website Development</h3>
            <p>
              We are helping small businesses and startups from last 15 years
              with top quality eCommerce website development and maintenance
              services.
            </p>
          </div>
          <div className="service-card">
            {/* <img src="/icons/mobile.png" alt="Mobile App" /> */}
            <h3>Mobile App Development</h3>
            <p>
              We are providing hybrid as well as native mobile app development
              services at affordable price with support.
            </p>
          </div>
          <div className="service-card">
            {/* <img src="/icons/marketing.png" alt="Digital Marketing" /> */}
            <h3>Digital Marketing</h3>
            <p>
              We have team of professional trained digital marketers. We are
              leading service provider in Jaipur for Digital Marketing Services.
            </p>
          </div>
          <div className="service-card">
            {/* <img src="/icons/seo.png" alt="SEO" /> */}
            <h3>SEO Services</h3>
            <p>
              We are providing affordable and quality SEO Services in Jaipur
              from last 15 years. Please visit our clients ranking to understand
              our SEO expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
