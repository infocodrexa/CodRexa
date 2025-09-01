import React from "react";
import "./AdwordsExpress.css";
import adword from "../../../assets/dword.png";
import adword1 from "../../../assets/adword1.jpg";
import adword2 from "../../../assets/adword2.jpg";
import BackgroundImage from "../Background/BackgroundImage";
const AdwordsExpress = () => {
  return (
    <>
     <BackgroundImage src={adword} alt="Codrexa Banner" type="1500x500"  marginTop="40px"/>
    <div className="adwords-container">
      <h1>Google Adwords Services - Search Ads, Shopping Ads, And Display Ads</h1>
      <p>
        We are the leading <strong>Google Ads Management Company in India</strong> that lets
        your website be in the prominent pages of search engine.
      </p>

      <h2>Choose our PPC management services in India to increase the revenue of the business</h2>
      <p>
        We have a team of expert digital marketers who have an ample amount of experience in
        managing different PPC accounts at ease. We provide PPC services to a wide array of
        industries. You can reap a wide array of benefits from our PPC management services.
      </p>

      <h2>Why choose our services</h2>
      <p>
        At <strong>CodRexa</strong>, we are the <strong>Best Adwords Company in India</strong>{" "}
        who has gained high popularity in offering top quality of Pay-per-click services in
        India. Our team stands out of the ordinary in developing unique strategies that will
        make the ad campaigns for your business a grand success. As you set the campaigns for
        your products or services, you can be ensured that it is going to have the best of the
        quality score. You can be ensured that the campaigns are going to have a very good CTR.
        We pick an outstanding landing space that will help you in viewing the best ever results
        within the shortest possible duration of time.
      </p>

      <p>
        <strong>
          Being a Leading PPC Advertising Agency, we offer a broad range of PPC services to our
          clients:
        </strong>
      </p>

      <ul>
        <li>Search Advertising</li>
        <li>Display Advertising</li>
        <li>Shopping Advertising</li>
      </ul>
    </div>
       <div className="award2-wrapper">
      {/* Paid Search Section */}
      <div className="award2-section">
        <div className="award2-image">
          <img src={adword1} alt="Paid Search Marketing" />
        </div>
        <div className="award2-content">
          <h2>Paid Search Marketing services in India</h2>
          <p>
            <strong>CodRexa</strong> provides Google Adwords Search{" "}
            <strong>Paid Marketing Campaigns</strong>, one of the best tools
            for paid search marketing. It is an inexpensive and very scalable
            form of web marketing designed to connect your advertisement with
            searchers actively seeking what you provide.
          </p>
          <p>
            The most usually used marketing campaigns are pay per click or PPC campaigns.
          </p>
        </div>
      </div>

      {/* Shopping Section */}
      <div className="award2-section">
        <div className="award2-image">
          <img src={adword2} alt="Google Shopping Ads" />
        </div>
        <div className="award2-content">
          <h2>Google Shopping advertising services in India</h2>
          <p>
            <strong>CodRexa</strong> also runs{" "}
            <strong>Google shopping campaigns</strong> which are basically used
            for online stores. If you are a retailer or running a shopping
            website, Google Shopping advertising helps promote your local
            inventory, online shopping website, and local store.
          </p>
          <p>
            This boosts your website traffic or local store visits and gets better results.
          </p>
        </div>
      </div>
    </div>
       <div className="adword3-wrapper">
      <h2>Benefits of your Google Shopping campaigns -</h2>
      <ul>
        <li>
          <strong>Best qualified leads</strong> - Shopping ads are more than just
          a text ad—they show users a photo of your Product Category, Product title,
          Product price, store name, and more.
        </li>
        <li>
          <strong>Easy Retail campaign management</strong> - Google shopping ads
          provide the tools for users to easily manage shopping ads using product
          attributes.
        </li>
        <li>
          <strong>Powerful Creative Report & Customized Data</strong> - Google Adwords
          Shopping ads provide creative and customized reports to help users understand
          conversions and ROI.
        </li>
      </ul>

      <h2>Google Display Advertising Services in Jaipur, India?</h2>
      <p>
        <strong>CodRexa</strong> offers Google Display Advertising services, one of the
        latest techniques in digital marketing. Display ads generally appear as banner
        ads with text and graphics, showing across social media platforms like Facebook,
        Instagram, Twitter, etc.
      </p>

      <h3>There are many types of display ads</h3>
      <ul className="adword3-types">
        <li>Retargeting</li>
        <li>Acquisition</li>
        <li>Brand awareness</li>
      </ul>

      <p className="adword3-highlight">
        So if you are planning to use shopping ads for your online store,{" "}
        <strong>CodRexa</strong> is here to provide you with the best Google display
        advertising services in Jaipur, India at the best price.
      </p>
    </div>
     </>
  );
};

export default AdwordsExpress;
