import React from "react";
import "./Seo.css";

const Seo = () => {
  const phoneNumber = "7300423846";
  const message = "Hello, I am interested in your SEO services!";

const handleWhatsappClick = () => {
  const encodedMessage = encodeURIComponent(message);
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
    "_blank"
  );
};


  return (
    <>
      {/* --------- SEO Overview Section --------- */}
      <section className="seo-section">
        <div className="seo-container">
          {/* Left Content */}
          <div className="seo-content">
            <h1 className="seo-title">
              Best SEO Company in Samastipur – CodRexa
            </h1>
            <ul className="seo-points">
              <li>Boost your online visibility with CodRexa.</li>
              <li>Result-driven SEO strategies for maximum ROI.</li>
              <li>100% Organic and Sustainable SEO Growth.</li>
              <li>No fake promises – only data-backed results.</li>
            </ul>
            <button className="seo-btn" onClick={handleWhatsappClick}>
              Message on WhatsApp
            </button>
          </div>

          {/* Right Image */}
          <div className="seo-image">
            <img
              src="https://www.arinfotech.co.in/img/seo/custom-one.svg"
              alt="SEO Services by CodRexa"
            />
          </div>
        </div>
      </section>

      {/* --------- SEO Detail Section --------- */}
      <section className="seo-service-section">
        <div className="seo-service-container">
          {/* Heading */}
          <h2 className="seo-service-title">
            Professional SEO Services in Samastipur by CodRexa
          </h2>
          <p className="seo-service-subtitle">
            Get top-notch SEO solutions to boost Traffic, Leads, Visibility, and
            Sales. Affordable SEO packages for every business.
          </p>

          {/* Paragraphs */}
          <div className="seo-service-content">
            <p>
              Want to rank on Google’s first page? CodRexa provides{" "}
              <strong>premium SEO services in Samastipur, Bihar</strong> to help
              businesses grow online, gain visibility, and increase ROI. Our
              team uses proven strategies to deliver measurable results.
            </p>

            <p>
              A strong online presence is essential for success. If your website
              is not ranking, you are missing huge opportunities. At CodRexa, we
              ensure your business appears on the top of Google search results
              using ethical and long-term SEO practices.
            </p>

            <p>
              We are an experienced{" "}
              <strong>SEO company in Samastipur</strong>, serving clients across
              India and globally. Our SEO campaigns are customized for every
              business type, ensuring better engagement and higher conversions.
            </p>
          </div>
        </div>
      </section>

      {/* --------- SEO Extra Section --------- */}
      <section className="seo-extra-section">
        <div className="seo-extra-container">
          {/* Left Image */}
          <div className="seo-extra-image">
            <img
              src="https://www.arinfotech.co.in/img/seo/custom-one.svg"
              alt="Why choose CodRexa SEO?"
            />
          </div>

          {/* Right Content */}
          <div className="seo-extra-content">
            <h2 className="seo-extra-title">
              Why Choose CodRexa for SEO in Samastipur?
            </h2>
            <h3 className="seo-extra-subtitle">
              Experienced SEO Experts | Proven Results | Transparent Process
            </h3>
            <p>
              At CodRexa, SEO is not just about keywords; it’s about building
              authority, relevance, and trust. Our strategies include in-depth
              keyword research, on-page optimization, quality backlinks, and
              performance tracking.
            </p>
            <p>
              Unlike paid ads, SEO is a cost-effective and long-term solution.
              We help businesses grow without wasting money on irrelevant
              traffic. Our SEO practices strictly follow Google guidelines.
            </p>
            <p>
              CodRexa is recognized as a leading{" "}
              <strong>SEO agency in Samastipur</strong>. We offer affordable
              plans with guaranteed growth, because your success is our priority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seo;
