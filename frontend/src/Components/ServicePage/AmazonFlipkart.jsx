import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import marketplaceImg from "../../assets/Marketing.png";

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
      className="bg-light py-3 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <ol className="breadcrumb mb-0">
          {breadcrumbData.map((item, index) => (
            <li
              key={item.id}
              className={`breadcrumb-item ${
                index === breadcrumbData.length - 1
                  ? "active fw-bold text-primary"
                  : ""
              }`}
              aria-current={index === breadcrumbData.length - 1 ? "page" : ""}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="text-decoration-none text-dark fw-semibold hover-link"
                >
                  {item.label}
                </a>
              ) : (
                item.label
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
    <div className="container my-5">
      {/* Title with gradient + zoom animation */}
      <motion.h1
        className="fw-bold mb-3 text-center text-gradient"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {contentData.title}
      </motion.h1>

      <motion.p
        className="text-muted text-center fs-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {contentData.introduction}
      </motion.p>

      {contentData.sections.map((section, idx) => (
        <motion.div
          key={section.id}
          className="mb-5 p-4 rounded shadow-lg hover-card"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="h4 fw-bold mb-3 text-primary">{section.title}</h2>

          {section.paragraphs &&
            section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted fs-6"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

          {section.list && (
            <ul className="list-unstyled mt-3">
              {section.list.map((item, i) => (
                <motion.li
                  key={i}
                  className="mb-2 d-flex align-items-start fs-6 text-muted"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
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

// ===== Final Component (Merging All) =====
export default function AmazonFlipkart() {
  return (
    <>
      <BackgroundImage src={marketplaceImg} alt="Marketplace Banner" marginTop="30px"/>
      <Breadcrumb />
      <MainContent />
    </>
  );
}


