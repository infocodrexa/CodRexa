import React from "react";
import "animate.css";
import { motion } from "framer-motion";
import BackgroundImage from "../Background/BackgroundImage";
import marketplaceImg from "../../../assets/Marketing.png";
import "./AmazonFlipkart.css"; // 👈 custom CSS import

// ===== Breadcrumb =====
const breadcrumbData = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/" },
  { id: "current", label: "Market Place Product Listing" },
];

function Breadcrumb() {
  return (
    <motion.nav
      aria-label="breadcrumb"
      className="breadcrumb__nav"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="breadcrumb__container">
        <ol className="breadcrumb__list">
          {breadcrumbData.map((item, index) => (
            <li
              key={item.id}
              className={`breadcrumb__item ${
                index === breadcrumbData.length - 1
                  ? "breadcrumb__item--active"
                  : ""
              }`}
              aria-current={index === breadcrumbData.length - 1 ? "page" : ""}
            >
              {item.href ? (
                <a href={item.href} className="breadcrumb__link">
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumb__current">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}

// ===== Content Data =====
const contentData = {
  title: "Product Listing Optimization Services",
  introduction:
    "Ecommerce product upload is getting quite popular in and around India as it can do so much good for your business. Ecommerce product listing includes placing of products on Magento, Amazon, eBay and many other websites.",
  sections: [
    {
      id: "importance",
      title: "Why Product Listing Optimization is Important?",
      paragraphs: [
        "Being a part of Amazon, Ebay, Flipkart, etc seller accounts, it is highly important that the products should be shown in an efficient manner so that it impact purchasing choices of clients.",
        "By getting connected with efficient and precise Amazon or <strong>Flipkart products listing service</strong> providers, the ability of inducing and familiarizing prospects will definitely boost your sales.",
      ],
    },
    {
      id: "why-consider",
      title: "Why Consider Our Product Listing Services?",
      paragraphs: [
        "The main motto why we at Codrexa deal in <strong>Amazon product listing</strong> services/ product upload services is to help our clients to gain better business opportunities which will be fruitful for them.",
        "With us clients can have peace of mind as we do have and follow some pre-planned Flipkart or Amazon product management strategies.",
        "By outsourcing your product upload needs to us will make sure that your business runs smoothly and also assure that kept is kept secure.",
      ],
    },
    {
      id: "why-work-with-us",
      title: "Why Work With Us?",
      list: [
        "We, at Codrexa along with providing the best <strong>Amazon listing service Jaipur,</strong> we help our clients at every possible step.",
        "We can write user friendly, unique, SEO rich and engaging titles for your products which will help in increasing marketability.",
        "We make sure that images are added as per the standards laid by Amazon which will automatically increase attractiveness of product page.",
        "Our skilled image editors edit images as per your choice. We also manage Amazon inventory to avoid delivery issues.",
        "We can also help clients manage discounts, reward points, offers, coupons etc.",
      ],
    },
  ],
};

// ===== Main Content =====
function MainContent() {
  return (
    <div className="content__container">
      <motion.h1
        className="content__title"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {contentData.title}
      </motion.h1>

      <motion.p
        className="content__intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {contentData.introduction}
      </motion.p>

      {contentData.sections.map((section, idx) => (
        <motion.div
          key={section.id}
          className="content__card"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="content__subtitle">{section.title}</h2>

          {section.paragraphs &&
            section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="content__text"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

          {section.list && (
            <ul className="content__list">
              {section.list.map((item, i) => (
                <motion.li
                  key={i}
                  className="content__list-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="content__icon">✔</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ===== Final Component =====
export default function AmazonFlipkart__Page() {
  return (
    <>
      <BackgroundImage
        src={marketplaceImg}
        alt="Marketplace Banner"
        type="1500x500"
        marginTop="40px"
      />
      <Breadcrumb />
      <MainContent />
    </>
  );
}
