import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaSnapchatGhost,
  FaTumblr,
} from "react-icons/fa";
import "./FbTwitterAds.css";
import illustration from "../../../assets/fbad2.png"; 
import servicesImg from "../../../assets/fbad3.png"; 
import platformsImg from "../../../assets/fbad4.png"; 
import fbImage from "../../../assets/fbad5.png"; 
import instaImg from "../../../assets/fbad6.png"; 
import ytImage from "../../../assets/fbad7.png"; 
import img1 from "../../../assets/fbad1.png"; 
import BackgroundImage from "../Background/BackgroundImage";
// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const SocialMediaMarketing = () => {
  const platforms = [
    { name: "Facebook", icon: <FaFacebookF />, color: "#1877F2" },
    { name: "Instagram", icon: <FaInstagram />, color: "#E4405F" },
    { name: "Twitter", icon: <FaTwitter />, color: "#1DA1F2" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, color: "#0A66C2" },
    { name: "Pinterest", icon: <FaPinterestP />, color: "#BD081C" },
    { name: "YouTube", icon: <FaYoutube />, color: "#FF0000" },
    {
      name: "Snapchat",
      icon: <FaSnapchatGhost />,
      color: "#FFFC00",
      text: "#000",
    },
    { name: "Tumblr", icon: <FaTumblr />, color: "#36465D" },
  ];

  return (
    <>
      {/* ===== First Section ===== */}
      <section className="smm-section">
        {/* <div className="SocialMediaMarketingbanner">
          <img src={img1} alt="Codrexa Banner" className="SocialMediaMarketingbanner-img" />
        </div> */}
        <BackgroundImage src={img1} alt="Codrexa Banner" type="1500x500" marginTop="30px"/>
        <div className="smm-container">
          {/* Left Content */}
          <motion.div
            className="smm-content  smm-contents"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <motion.h2 variants={fadeUp}>
              Best Social Media Marketing Services Company <br /> in India
            </motion.h2>
            <motion.p variants={fadeUp}>
              Through <strong>Social media marketing services</strong>  <br />you can
              boost your company  <br />or organization’s online presence in a very
              short duration. <br /> We provide a great opportunity for your business
              to grow every day. So <strong>CodRexa</strong> is here to help you
              launch your social media <br /> marketing campaign, converting your
              online audience into potential customers and turning them into
              real-time customers.
            </motion.p>
            <motion.p variants={fadeUp}>
              <strong>CodRexa</strong> is the leading social media marketing
              services provider company <br /> in India. Social Media Paid Marketing is
              the instant solution <br /> for promoting and getting quality leads
              through social media platforms. Social <br /> media marketing will help
              you achieve your guaranteed online marketing goals.
            </motion.p>
            <motion.p variants={fadeUp}>
              If you are searching for quality  <br /> social media marketing services 
              at an affordable cost, then you must <br /> check our social media{" "}
              <strong>paid marketing services.</strong>
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="smm-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <img src={illustration} alt="Social Media Marketing" />
          </motion.div>
        </div>
      </section>

      {/* ===== Second Section ===== */}
      <section className="smm-section dark-bg">
        <div className="smm-container">
          {/* Left Image */}
          <motion.div
            className="smm-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <img src={servicesImg} alt="SMM Services" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="smm-content white-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <motion.h2 variants={fadeUp} style={{ color: "orange" }}>
              What We Do in Our SMM Services
            </motion.h2>
            <motion.ul
              className="smm-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Focus on targeting Audience, location, age group, gender and more (relevant and filtered audiences).",
                "Develop and design quality ads on selected social media platforms.",
                "Social media content planning.",
                "Consistent brand image.",
                "Attracting new audiences.",
                "Social media for content promotion.",
                "Tracking all social media accounts of competitors.",
                "Using Social Media Insights to learn more about customers.",
                "Measure and analyze reach, engagement, likes/follows/subscribes.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Third Section ===== */}
      <section className="smm-section">
        <div className="smm-container">
          {/* Left Content */}
          <motion.div
            className="smm-content smm-contents"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <motion.h2 variants={fadeUp}>
              Best Social Media Marketing Platforms for Your Business
            </motion.h2>
            <div className="platform-grid">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className={`platform-card ${
                    platform.name === "Snapchat" ? "snapchat-card" : ""
                  }`}
                  style={{
                    backgroundColor:
                      platform.name === "Snapchat" ? "#fff" : "#fff",
                    color: platform.text || "#333",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <span
                    className="platform-icon"
                    style={{ color: platform.color }}
                  >
                    {platform.icon}
                  </span>
                  <p>{platform.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="smm-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <img className="SocialMediaIMage" src={platformsImg} alt="Social Media Platforms" />
          </motion.div>
        </div>
      </section>
      
      {/* <section className="social-section">
        <div className="container">
          <h2>
            Mostly Use <span>Social Media Marketing</span> Use on These
            platforms
          </h2>
          <p className="sub-text">
            Most of business are using these{" "}
            <a href="#">social media optimization</a> and also, marketing so you
            can choose any social media marketing services to boost your
            business.
          </p>

          <div className="content fb-contents">
            <div className="left">
              <img className="SocialMediaIMage" src={fbImage} alt="Facebook Marketing" />
            </div>
            <div className="right fb-right SocialMediaIMage">
              <h3>Facebook Marketing</h3>
              <p>
                Facebook is the world's largest social media platform. Facebook
                had 2.9 billion monthly active users in 2022. That's very useful
                for marketing purposes.
              </p>

              <h4>What We Do in Facebook Marketing</h4>
              <ul>
                <li>
                  <em>
                    Make a New Facebook Business page (We won't if it already
                    exists). Optimize your Facebook Business Page with your
                    business information
                  </em>
                </li>
                <li>
                  <em>
                    Build your business on Facebook Marketplace and Facebook
                    Shop (if your business is product-based)
                  </em>
                </li>
              </ul>

              <h4>Why Choose Facebook for Marketing?</h4>
              <p>
                Paid Advertising Campaign to promote your business, Given
                Facebook, paid advertising campaign types can be used for your
                advertising objective.
              </p>
              <ul className="bullet">
                <li>Image</li>
                <li>Video</li>
                <li>Carousel</li>
                <li>Instant Experience</li>
                <li>Collection</li>
              </ul>
            </div>
          </div>

          <p className="footer">
            Your advertising purpose/objective may also affect the placements
            (Facebook, Instagram, Messenger, and Audience Network) where your
            ads may display.
          </p>
          <p className="footer">
            So this is the right place to promote your business. Facebook has
            become a core to a creative and innovative way of doing online
            business where the online thread is created, and people start
            connecting via the thread. You have to hire a{" "}
            <strong>Professional Social Media Marketing Agency.</strong>
          </p>
        </div>
      </section> */}


      <section className="insta-section">
        <div className="container">
          <h2 className="title">Want To Grow Your Business?</h2>

          {/* <div className="content fb-content">
            
            <div className="left">
              <img src={instaImg} alt="Instagram Marketing" />
            </div>

            <div className="right">
              <h3>Instagram Marketing</h3>
              <p>
                Well, before I tell you about Instagram marketing, let us give
                you an overview of Instagram as it will help you. Instagram is
                the best social media platform; mostly adults and youth use
                Instagram.{" "}
                <strong>1.22 billion People use Instagram each month.</strong>
              </p>
              <p>
                Suppose you have to decide to promote your business through
                Instagram marketing as a social media marketing specialist. In
                that case, I will tell you that Great Platform and the right way
                to achieve your <strong>Digital Marketing</strong> goals.
              </p>

              <h4>The Types of Instagram Ads We Use to do for marketing</h4>
              <p>
                We use the given types of Instagram ad formats to promote your
                business or sell your business products following your
                advertising objectives
              </p>

              <div className="ads-list">
                <ul>
                  <li>Image ads</li>
                  <li>Carousel ads</li>
                  <li>IGTV ads</li>
                </ul>
                <ul>
                  <li>Stories ads</li>
                  <li>Collection ads</li>
                  <li>Shopping ads</li>
                </ul>
                <ul>
                  <li>Video ads</li>
                  <li>Explore ads</li>
                  <li>Reels ads</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Bottom Content */}
          <div className="bottom">
            <h4>What We Do in Instagram Marketing</h4>
            <ul>
              <li>We use a business account.</li>
              <li>
                We will optimize your Instagram business account. (Contact
                information and call-to-action buttons on your profile, primary
                and secondary message inbox)
              </li>
              <li>Analyze Instagram Insights</li>
              <li>
                Use Instagram Ads for promoting your business - Messages / Lead
                Generation / Brand Awareness / Reach / Traffic / Engagement /
                App Installs / Catalogue Sales / Store Traffic.
              </li>
              <li>Instagram Shopping - To sell your products through it.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="t-section">
        <div className="t-container">
          {/* Twitter Card */}
          <div className="t-card">
            <FaTwitter className="t-icon t-twitter" />
            <h3 className="t-title">Twitter Marketing</h3>
            <p className="t-text">
              Twitter has become a fantastic platform for social media marketing
              with a strong emphasis on real-time patrons. According to
              advertisers on Twitter, more than 80 per cent of social customer
              service requests occur on Twitter.
            </p>
          </div>

          {/* Linkedin Card */}
          <div className="t-card">
            <FaLinkedinIn className="t-icon t-linkedin" />
            <h3 className="t-title">Linkedin Marketing</h3>
            <p className="t-text">
              Linkedin is presently more than job search sites. Now it has
              turned out into a professional social media marketing centre.
              LinkedIn has more features like share videos, text content and
              more. The best platform to build connections, reach and network
              with potential customers for the business.
            </p>
          </div>
        </div>
      </section>
      <section className="y-section">
        <div className="y-container">
          {/* Left Image */}
          <div className="y-imageBox">
            <img src={ytImage} alt="YouTube Marketing" className="y-image" />
          </div>

          {/* Right Content */}
          {/* <div className="y-content">
            <h2 className="y-title">YouTube Marketing</h2>
            <p className="y-text">
              Humans love to watch than reading, so it is the world's third most
              visited site. One billion hours of YouTube videos a day, more than
              Netflix and Facebook videos combined, i.e. more opportunities to
              promote business through video <a href="#">content marketing</a>.
              It is the best social media marketing platform for video content
              marketing to reach out to customers. Every business can use it to
              brand and attract buyers or clients by describing products and
              services intelligently and interacting directly with potential
              online customers.
            </p>

            <h3 className="y-subtitle">What We Do In YouTube Marketing</h3>
            <ul className="y-list">
              <li>We create a YouTube channel for your business.</li>
              <li>We optimize your YouTube channel</li>
              <li>We optimize your video to get more views</li>
            </ul>

            <h3 className="y-subtitle">
              Our YouTube Marketing Goals for Marketing through Video Content
            </h3>
            <ul className="y-list">
              <li>Build an online presence for your business</li>
              <li>Increase brand awareness</li>
              <li>Get new leads</li>
              <li>Establish your brand as an industry leader</li>
            </ul>

            <p className="y-note">
              <em>Plus, we'll focus on your marketing objective as needed.</em>
            </p>
          </div> */}
        </div>
      </section>

      {/* <section className="k-benefits  benifitsSection">
        <div className="k-container">
          <h2 className="k-title">
            Benefits of using CodRexa Social Media Marketing Services
          </h2>

          <ul className="k-list">
            <li>
              At CodRexa you can find experienced teams for different platforms
              <br />
              like Facebook, Instagram, Twitter, Linkedin, Youtube, etc.
            </li>
            <li>
              We have the very effective strategy builders according to your
              marketing objective to promote your business through SMM services.
            </li>
            <li>
              We have very more experienced social media optimization and
              marketing content writer/developers.
            </li>
            <li>
              We will provide result-oriented online marketing services with
              100% accuracy.
            </li>
            <li>
              We will provide you with quality social media marketing services
              in Jaipur, India, through Facebook, Instagram, YouTube and other
              platforms.
            </li>
            <li>We provide you with affordable SMM services.</li>
            <li>We will convert more relevant traffic to your website.</li>
            <li>We focus on high conversion rates.</li>
            <li>We focus on superior brand loyalty.</li>
          </ul>

          <p className="k-note">
            If you want to increase the visibility and online presences of your
            brand, services, products, events, offers and more then you should
            start using SMM. Hire CodRexa as the{" "}
            <strong>best social media marketing company in India</strong>. We
            plan these all marketing strategies worthy for your business by
            increasing your Revenue, Profit and Branding.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default SocialMediaMarketing;
