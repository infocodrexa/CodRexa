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
      <section className="ecommerce-hero">
        <div className="ecommerce-hero-left">
          <h2>
            We Deliver Memorable E-Commerce <br /> Solutions & Marketing
            Services
          </h2>
          <p>20+ 5-Star Reviews on Google | 5+ Satisfied Clients</p>
          <button className="ecommerce-btn-primary">
            Start Today Request For Free Quote
          </button>
        </div>
        <div className="ecommerce-hero-right">
          <img src={bannerImg} alt="Ecommerce Banner" />
        </div>
      </section>

      {/* ✅ Service Info */}
      <section className="ecommerce-service">
        <h3>We Provide Complete eCommerce Solution In Samastipur, Bihar</h3>
        <p>
          We take your business's e-commerce website seriously so that your
          e-commerce business can grow. ...
        </p>
      </section>

      {/* ✅ Features */}
      <section className="ecommerce-features">
        <div className="ecommerce-features-left">
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
        <div className="ecommerce-features-right">
          <img src={previewImg} alt="Preview" />
        </div>
      </section>

      {/* ✅ Streamline Section */}
      <section className="ecommerce-streamline">
        <div className="ecommerce-streamline-left">
          <h3>Streamline Your Business with Our Quality Services</h3>
          <p>
            Your business requires a professional and trusted ecommerce development 
            service provider...
          </p>
        </div>
        <div className="ecommerce-streamline-right">
          <img src={servicesImg} alt="Quality Services" />
        </div>
      </section>

      {/* ✅ Payment Section */}
      <section className="ecommerce-payment">
        <div className="ecommerce-payment-left">
          <img src={paymentImg} alt="E-commerce Payment Gateway" />
        </div>

        <div className="ecommerce-payment-right">
          <h3>E-commerce Payment Gateway Partner</h3>
          <p>We provide multiple payment gateway options to our customers.</p>

          <div className="ecommerce-payment-grid">
            <div className="ecommerce-payment-card"><img src={paypalLogo} alt="Paypal" /><span>Paypal</span></div>
            <div className="ecommerce-payment-card"><img src={payuLogo} alt="PayU" /><span>PayU</span></div>
            <div className="ecommerce-payment-card"><img src={razorpayLogo} alt="Razorpay" /><span>Razorpay</span></div>
            <div className="ecommerce-payment-card"><img src={instamojoLogo} alt="InstaMojo" /><span>InstaMojo</span></div>
            <div className="ecommerce-payment-card"><img src={paykunLogo} alt="PayKun" /><span>PayKun</span></div>
            <div className="ecommerce-payment-card"><img src={ccavenueLogo} alt="CCAvenue" /><span>CCAvenue</span></div>
            <div className="ecommerce-payment-card"><img src={paytmLogo} alt="PayTM" /><span>PayTM</span></div>
            <div className="ecommerce-payment-card"><img src={direcpayLogo} alt="DirecPay" /><span>DirecPay</span></div>
            <div className="ecommerce-payment-card"><img src={payubizLogo} alt="PayUbiz" /><span>PayUbiz</span></div>
            <div className="ecommerce-payment-card"><img src={mobikwikLogo} alt="Mobikwik" /><span>Mobikwik</span></div>
            <div className="ecommerce-payment-card"><img src={emvantageLogo} alt="Emvantage" /><span>Emvantage</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
