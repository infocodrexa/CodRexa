import React from "react";
import "./EcommerceDev.css";
import bannerImg from "../../../assets/e-commerce-banner-imag.png"; 
import previewImg from "../../../assets/arvino.png"; 
import servicesImg from "../../../assets/about-bg-v2.png"; 
import paymentImg from "../../../assets/apnikirana.png"; 
import paypalLogo from "../../../assets/payment-getway-1.jpg"; 
import payuLogo from "../../../assets/payment-getway-2.jpg"; 
import razorpayLogo from "../../../assets/payment-getway-3.jpg"; 
import instamojoLogo from "../../../assets/payment-getway-4.jpg"; 
import paykunLogo from "../../../assets/payment-getway-5.jpg"; 
import ccavenueLogo from "../../../assets/payment-getway-6.jpg"; 
import paytmLogo from "../../../assets/payment-getway-8.jpg"; 
import direcpayLogo from "../../../assets/payment-getway-9.jpg"; 
import payubizLogo from "../../../assets/payment-getway-10.jpg"; 
import mobikwikLogo from "../../../assets/payment-getway-11.jpg"; 
import emvantageLogo from "../../../assets/payment-getway-12.jpg";

const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h2>
            We Deliver Memorable E-Commerce <br /> Solutions & Marketing
            Services
          </h2>
          <p>20+ 5-Star Reviews on Google | 5+ Satisfied Clients</p>
          <button className="btn-primary">
            Start Today Request For Free Quote
          </button>
        </div>
        <div className="hero-right">
          <img src={bannerImg} alt="Ecommerce Banner" />
        </div>
      </section>

      {/* ✅ Service Info */}
      <section className="service-section">
        <h3>We Provide Complete eCommerce Solution In Samastipur, Bihar</h3>
        <p>
          We take your business's e-commerce website seriously so that your
          e-commerce business can grow. E-commerce is mainly classified into
          three divisions, namely B2B, B2C and C2C, i.e., Business to Business,
          Business to Customer and Customer to Customer. As a website design
          company, we are one of the leading names in the development of
          ecommerce websites. Which can provide excellent ecommerce solutions
          for any company or individuals integrating the latest technology and
          techniques to help online businesses succeed in the long run.
          Ecommerce web design specifically serves the serious business user.
          Know Ready to grow your business with ecommerce website design?
        </p>
      </section>

      {/* ✅ Features */}
      <section className="features-section">
        <div className="features-left">
          <h3>What we do in E-commerce Design & Development Service</h3>
          <ul>
            <li>Custom High Quality Design</li>
            <li>Easy to Navigate Website</li>
            <li>Custom Shopping Cart</li>
            <li>Multiple Payment Gateway</li>
            <li>Shipping Label Generation</li>
            <li>Out Of Stock Reports</li>
            <li>Product Listing with Variations</li>
            <li>Mobile Responsive</li>
            <li>Custom Product Pages</li>
            <li>Custom Checkout Option</li>
            <li>GST Integration</li>
            <li>Inventory Reports</li>
            <li>GST / VAT Invoice Printing</li>
            <li>Buy Now and EMI Option</li>
            <li>B2B Websites</li>
          </ul>
        </div>
        <div className="features-right">
          <img src={previewImg} alt="Preview" />
        </div>
      </section>

      {/* ✅ Bottom Info */}
      <section className="streamline-section">
  <div className="streamline-left">
    <h3>Streamline Your Business with Our Quality Services</h3>
    <p>
      Your business requires a professional and trusted ecommerce development 
      service provider. At AR Infotech, we have helped thousands of online 
      companies beat their competitors to gain more leads through ecommerce 
      web design and mobile app development. We always believe in turning your 
      visitors into your customers on your site. Our dedicated team is proactively 
      working to provide you with quality services. We are providing robust web 
      development solutions. We assure you that you will get quality services to 
      succeed online. We ensure you get the advantage of endless features and 
      functionality when we handle your project professionally.
    </p>
  </div>
  <div className="streamline-right">
    <img src={servicesImg} alt="Quality Services" />
  </div>

   </section>
    <section className="payment-section">
  <div className="payment-left">
    <img src={paymentImg} alt="E-commerce Payment Gateway" />
  </div>

  <div className="payment-right">
    <h3>E-commerce Payment Gateway Partner</h3>
    <p>We provide multiple payment gateway options to our customers.</p>

    <div className="payment-grid">
      <div className="payment-card"><img src={paypalLogo} alt="Paypal" /><span>Paypal</span></div>
      <div className="payment-card"><img src={payuLogo} alt="PayU" /><span>PayU</span></div>
      <div className="payment-card"><img src={razorpayLogo} alt="Razorpay" /><span>Razorpay</span></div>
      <div className="payment-card"><img src={instamojoLogo} alt="InstaMojo" /><span>InstaMojo</span></div>
      <div className="payment-card"><img src={paykunLogo} alt="PayKun" /><span>PayKun</span></div>
      <div className="payment-card"><img src={ccavenueLogo} alt="CCAvenue" /><span>CCAvenue</span></div>
      <div className="payment-card"><img src={paytmLogo} alt="PayTM" /><span>PayTM</span></div>
      <div className="payment-card"><img src={direcpayLogo} alt="DirecPay" /><span>DirecPay</span></div>
      <div className="payment-card"><img src={payubizLogo} alt="PayUbiz" /><span>PayUbiz</span></div>
      <div className="payment-card"><img src={mobikwikLogo} alt="Mobikwik" /><span>Mobikwik</span></div>
      <div className="payment-card"><img src={emvantageLogo} alt="Emvantage" /><span>Emvantage</span></div>
    </div>
  </div>
</section>


   </div>
  );
};

export default Ecommerce;
