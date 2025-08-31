import { Link } from "react-router-dom";
import "./Service.css";

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Services</h1>
      <div className="services-grid">

        {/* Digital Marketing Services */}
        <div className="service-box">
          <h3>Digital Marketing Services</h3>
          <ul>
            <li><Link to="/services/seo">SEO (Search Engine Optimization)</Link></li>
            <li><Link to="/services/smo">Social Media Optimization</Link></li>
            <li><Link to="/services/local-seo">Local SEO Services</Link></li>
            <li><Link to="/services/content-marketing">Content Marketing</Link></li>
            <li><Link to="/services/orm">Online Reputation Management</Link></li>
            <li><Link to="/services/link-building">Link Building</Link></li>
            <li><Link to="/services/website-optimization">Website Optimization</Link></li>
          </ul>
        </div>

        {/* Website Design & Development */}
        <div className="service-box">
          <h3>Website Design & Development</h3>
          <ul>
            <li><Link to="/services/modern-responsive">Modern Responsive Design</Link></li>
            <li><Link to="/services/ecommerce-dev">E-Commerce Website</Link></li>
            <li><Link to="/services/wordpress-shopify">WordPress/Shopify</Link></li>
            <li><Link to="/services/crm">Custom CRM Solutions</Link></li>
            <li><Link to="/services/web-dev">Web Development</Link></li>
          </ul>
        </div>

        {/* Paid Marketing */}
        <div className="service-box">
          <h3>Paid Marketing</h3>
          <ul>
            <li><Link to="/services/ppc">Pay Per Click (PPC)</Link></li>
            <li><Link to="/services/fb-twitter-ads">Facebook/Twitter Ads</Link></li>
            <li><Link to="/services/adwords-express">Google AdWords Express</Link></li>
            <li><Link to="/services/display-ads">Display/Search Ads</Link></li>
            <li><Link to="/services/shopping-ads">Shopping Ads</Link></li>
            <li><Link to="/services/lead-marketing">Lead Based Marketing</Link></li>
            <li><Link to="/services/youtube-promotion">YouTube Promotion</Link></li>
          </ul>
        </div>

        {/* Mobile Application */}
        <div className="service-box">
          <h3>Mobile Application</h3>
          <ul>
            <li><Link to="/services/android">Android Application</Link></li>
            <li><Link to="/services/ios">iOS Application</Link></li>
            <li><Link to="/services/app-store-optimization">App Store Optimization</Link></li>
          </ul>
        </div>

        {/* E-Commerce Market Place */}
        <div className="service-box">
          <h3>E-Commerce Market Place</h3>
          <ul>
            <li><Link to="/services/marketplace-listing">Marketplace Listing</Link></li>
            <li><Link to="/services/amazon-flipkart">Amazon / Flipkart</Link></li>
            <li><Link to="/services/affiliate-marketing">Affiliate Marketing</Link></li>
          </ul>
        </div>

        {/* Add On Services */}
        <div className="service-box">
          <h3>Add On Services</h3>
          <ul>
            <li><Link to="/services/redesign">Website Redesign</Link></li>
            <li><Link to="/services/maintenance">Website Maintenance</Link></li>
            <li><Link to="/services/domain-hosting">Domain & Hosting</Link></li>
            <li><Link to="/services/ssl">SSL Certification</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Services;