import Local from "../../assets/LOCALL.png";
import React from "react";
import "./LocalSeo.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={Local}
        alt="Local SEO Banner"
        className="banner-img img-fluid"
      />
    </div>
  );
};

const Content = () => {
  return (
    <>
      <div className="content">
        {/* <p className="breadcrumb">
          Home / Services / <span>Local SEO Services In Samastipur</span>
        </p> */}

        <h1>
          Local Google Business Listing and Map Optimization Services in
          Samastipur, India
        </h1>

        <p>
          Drive potential customers to your website with our result oriented{" "}
          <span>Local SEO Services In Samastipur</span>. A R Infotech Local SEO
          Optimization Services are perfect for small businesses which are
          focused on optimizing their website for a Specific Region.
        </p>

        <p>
          We’re having a team of SEO Professional and they are experienced in
          Optimizing websites for local Regions. Whatever budget you’re having
          for <span>Local SEO Services In Samastipur</span>, we’re sure that
          you’ll get Local SEO Package that suits your budget and requirements.
        </p>

        <div className="btn-container">
          <a href="http://localhost:5173/contact">
            <button className="cta-btn">Get A Free Quote</button>
          </a>{" "}
        </div>
      </div>

      <div className="section dark-section">
        <h2>We’re Specialized in Local Business and Map Listing</h2>
        <p>
          Looking to boost up your business in your targeted location? If yes,
          you're in the right place. We’re one of India’s popular{" "}
          <span>Local SEO Service Providers</span> and offering our customer
          result oriented, white hat Local SEO Optimization Services.
        </p>
        <p>
          Whatever your business niche, our{" "}
          <span>Local SEO Services In Samastipur</span> are perfect for
          enhancing the reputation of any brand.
        </p>
      </div>

      <div className="section light-section">
        <h2>Hyper Local SEO Service in India</h2>
        <p>
          Leading Services of Hyper Local SEO Hyper local SEO is like local SEO
          but in advanced local SEO We target some specific region or area, City
          or Pincode. If you want to do local SEO through Google Business
          profile then Consult with Local SEO Experts.
        </p>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Google Local My Business Listing</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="icon-circle">
              <i className="fas fa-box-open"></i>
            </div>
            <p>Easy to Showcase Products to Local Area Customers</p>
          </div>

          <div className="benefit-item">
            <div className="icon-circle">
              <i className="fas fa-laptop-code"></i>
            </div>
            <p>Easy to Present Services to Local Area Clients</p>
          </div>

          <div className="benefit-item">
            <div className="icon-circle">
              <i className="fas fa-percent"></i>
            </div>
            <p>Option to Upload New Products and Offers</p>
          </div>

          <div className="benefit-item">
            <div className="icon-circle">
              <i className="fas fa-user-tie"></i>
            </div>
            <p>Easy to Manage Working Hours and Holidays</p>
          </div>
        </div>

        <p className="benefit-desc">
          If you’re looking to attract locally based customers, then you surely
          need <strong>Local SEO Services in India</strong>. Our approach of
          Local SEO Services in Samastipur is completely unique and result
          oriented.
          <strong> Local SEO Agency in Samastipur</strong> first analyze your
          website and your local business competitor’s and accordingly make
          complete strategies for your Local SEO Marketing of Business Website.
        </p>

        <p className="benefit-desc strong">
          Grow Your Local Business with our Quality Local SEO Services in India!
        </p>
      </div>
    </>
  );
};

const LocalSeo = () => {
  return (
    <div>
      <Banner />
      <Content />
    </div>
  );
};

export default LocalSeo;
