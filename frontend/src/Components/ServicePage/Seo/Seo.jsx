import React from "react";
import "./Seo.css";
import seo1 from  "../../../assets/seo1.svg";
import seo2 from  "../../../assets/seo2.svg";
import seo3 from  "../../../assets/seo3.webp";
import seo4 from "../../../assets/seo4.svg";
import seo5 from "../../../assets/seo5.svg";
import meetingImage from "../../../assets/meeting.png";

const Seo = () => {
  const phoneNumber = "+917300423846";
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
              src={seo1}
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
              src={seo2}
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


     <div className="seo-wrapper">
      <div className="seo-container">
        
        {/* Left Content */}
        <div className="seo-content">
          <h2 className="seo-title">
            See How Our Company Can <br /> Generate Relevant Traffic to Your Website
          </h2>

          <ul className="seo-list">
            <li>
              ✅ <strong>SEO</strong> – Huge Amount of traffic from search engines.
            </li>
            <li>
              ✅ <strong>Content Marketing</strong> – We create quality content to boost
              your website ranking.
            </li>
            <li>
              ✅ <strong>Paid Marketing</strong> – Custom strategies for each project with
              result-oriented approach.
            </li>
          </ul>

          <button className="seo-btn">Call for Free Expert Advice</button>
        </div>

        {/* Right Image */}
        <div className="seo-image">
          <img  src={seo3} alt="SEO Services" />
        </div>
      </div>
    </div>
        


{/* Section 1 - Image Left */}
<div className="ar-seo-block">
  <div className="ar-seo-image">
    <img src={seo4} alt="SEO Ethical Services" />
  </div>
  <div className="ar-seo-content">
    <h3>100% Ethical SEO Services Make a Difference to Your Business</h3>
    <p>
      If your website rankings have been dropping, It's an indication that you are following
      outdated SEO strategies, You have not been updating your SEO practices. An ethical SEO
      strategy is required to achieve your objectives. So, whatever stage you’re in or somewhere
      your site exists, A R Infotech has experienced professionals with affordable SEO services
      package for all kind businesses.
    </p>
    <p>
      Even if your website is in which stage of ranking or any old SEO strategies have been used,
      still we can improve your website’s ranking, traffic, and sales problem, because A R Infotech
      has team of SEO Experts of 10 + years, We provide <b>SEO services in Jaipur</b> as well as all
      over India for all types of businesses like seo services for small and medium level companies
      and that too with a very affordable <b>SEO package in India.</b> We are always ready to serve
      enterprises level seo services.
    </p>
  </div>
</div>

{/* Section 2 - Image Right */}
<div className="ar-seo-block reverse">
  <div className="ar-seo-image">
    <img src={seo5} alt="SEO Growth Company Jaipur" />
  </div>
  <div className="ar-seo-content">
    <h3>SEO Service Company Jaipur India- Grow Your Business Online</h3>
    <p>
      A R Infotech, one of the fastest-growing SEO Company in India that boost your website’s traffic
      and compete in your industry, offers unique methods to achieve outstanding results with a team
      of experienced SEO experts. Being an Digital Marketing Company in India, We know what steps to
      take to get high rankings and drive maximum amount of traffic to a website.
    </p>
    <p>
      Online transactions are normal and increasing day by day in Internet Market. If you’re not there
      where your customer are, you are likely to loose many business opportunities. If you are not able
      to serve clients when they are ready to buy a product or service at a point you will no where to be found.
    </p>
  </div>
</div>


   
   <div 
     className="hero-section"
     style={{ backgroundImage: `url(${meetingImage})` }}
   >
     <div className="hero-overlay"></div>
     <div className="hero-content">
       <h1>
         Looking for best result in Search Engine Optimization <br />
         Services in <span className="highlight">Samastipur?</span>
       </h1>
       <h2>Let’s Discuss How we can help you</h2>
       <button
         className="cta-btn"
         onClick={() => (window.location.href = "tel:7300423846")}
       >
         Call to Expert
       </button>
   
       <h2 className="hero-address">📍 Samastipur, Bihar</h2>
     </div>
   </div>
        
        
    </>
  );
};

export default Seo;
