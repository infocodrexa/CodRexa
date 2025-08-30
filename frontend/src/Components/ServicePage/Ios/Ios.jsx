import React from "react";

// ✅ Assets
import img1 from "../../../assets/IOSIMG.png";
import Mobile from "../../../assets/Mobile.jpg";
import appimg from "../../../assets/appimg.avif";
import appimg2 from "../../../assets/appimg2.avif";
import mobileappdevelopment from "../../../assets/mobileappdevelopment.png"; 
import iosImg from "../../../assets/ios.png";
import kotlin from "../../../assets/kotlin.png";
import androidImg from "../../../assets/android.png";
import hybridImg from "../../../assets/hybridImg.svg";
import flutterImg from "../../../assets/flutterImg.png";
import reactImg from "../../../assets/reactImg.png";
import apiImg from "../../../assets/apiImg.png";
import aspImage from "../../../assets/aspImg.png";

// ✅ Components
import ContactForm from "../../forms/ContactForm";
import BackgroundImage from "../Background/BackgroundImage";

// ✅ Reusable HeroSection
const HeroSection = ({ title, description, buttonText, buttonLink, image, reverse = false, bgColor }) => {
  const styles = {
    heroSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      padding: "60px 10%",
      flexWrap: "wrap",
      backgroundColor: bgColor || "transparent",
    },
    heroReverse: { flexDirection: "row-reverse" },
    heroContent: { flex: 1, minWidth: "300px" },
    heroTitle: { fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, marginBottom: "20px", color: "#0a0a0a" },
    heroDescription: { fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "25px", color: "#333", whiteSpace: "pre-line" },
    heroButton: {
      display: "inline-block",
      padding: "14px 28px",
      background: "#e63946",
      color: "#fff",
      fontWeight: 600,
      borderRadius: "8px",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    heroImage: { flex: 1, minWidth: "280px", textAlign: "center" },
    heroImgTag: { width: "100%", maxWidth: "680px", height: "auto", objectFit: "contain" },
  };

  return (
    <section style={{ ...styles.heroSection, ...(reverse ? styles.heroReverse : {}) }}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>{title}</h1>
        <p style={styles.heroDescription}>{description}</p>
        {buttonText && (
          <a href={buttonLink} style={styles.heroButton}>
            {buttonText}
          </a>
        )}
      </div>
      {image && (
        <div style={styles.heroImage}>
          <img src={image} alt={title} style={styles.heroImgTag} />
        </div>
      )}
    </section>
  );
};

// ✅ MobileAppServices
const services = [
  { img: iosImg, text: "iOS App Development" },
  { img: androidImg, text: "Android App Development" },
  { img: hybridImg, text: "Hybrid App Development" },
  { img: flutterImg, text: "Flutter Development App" },
  { img: reactImg, text: "React Native App" },
  { img: kotlin, text: "IOS App Development" }, // ✅ NEW ITEM
  { img: apiImg, text: "App API Development" },
];

const MobileAppServices = () => {
  const groups = [];
  let pattern = [2, 2, 2]; // ✅ ab 7 items ke liye best hai
  let index = 0;

  while (index < services.length) {
    for (let size of pattern) {
      if (index < services.length) {
        groups.push(services.slice(index, index + size));
        index += size;
      }
    }
  }

  const styles = {
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 8%",
      flexWrap: "wrap",
      background: "#fdf7f7",
    },
    left: { flex: 1, minWidth: "320px" },
    row: {
      display: "grid",
      gap: "20px",
      marginBottom: "25px",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    },
    card: {
      background: "#fff",
      padding: "25px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      textAlign: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    },
    cardImg: {
      width: "50px",
      height: "50px",
      objectFit: "contain",
      marginBottom: "12px",
      transition: "transform 0.3s ease",
    },
    cardImgHover: { transform: "scale(1.2)" },
    cardText: { fontSize: "16px", fontWeight: "600", color: "#333" },
    right: { flex: 1, minWidth: "300px", textAlign: "center" },
    phoneImg: {
      width: "100%",
      maxWidth: "420px",
      borderRadius: "20px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.left}>
        {groups.map((group, i) => (
          <div key={i} style={styles.row}>
            {group.map((service, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.cardHover);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, styles.card);
                }}
              >
                <img
                  src={service.img}
                  alt={service.text}
                  style={styles.cardImg}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, styles.cardImgHover);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, styles.cardImg);
                  }}
                />
                <p style={styles.cardText}>{service.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={styles.right}>
        <img
          src={mobileappdevelopment}
          alt="Mobile Mockup"
          style={styles.phoneImg}
        />
      </div>
    </section>
  );
};


// ✅ AppCategoriesSection
const AppCategoriesSection = () => {
  const appCategories = [
    { id: "grocery", name: "Grocery Delivery Apps", description: "Food and grocery apps are growing rapidly...", image: "https://c.animaapp.com/meu8nvriPqZtaF/assets/groceries.svg", alt: "Groceries mobile app development" },
    { id: "ecommerce", name: "Ecommerce Mobile App", description: "In the digital age, online shopping is essential...", image: "https://c.animaapp.com/meu8nvriPqZtaF/assets/smartphone.svg", alt: "Ecommerce Mobile App development" },
    { id: "education", name: "Education App", description: "Online education is becoming very popular in India...", image: "https://c.animaapp.com/meu8nvriPqZtaF/assets/video-tutorials.svg", alt: "Education App development" },
    { id: "health-fitness", name: "Health & Fitness App", description: "Health and fitness apps are widely adopted...", image: "https://c.animaapp.com/meu8nvriPqZtaF/assets/healthcare.svg", alt: "Health & Fitness App development" },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Fastest Growing App Category Last Few Years</h2>
        <p className="mb-4">Check out the most popular mobile application categories from recent years.</p>
      </div>
      <div className="row g-4">
        {appCategories.map((category) => (
          <div key={category.id} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src={category.image} className="card-img-top p-3" alt={category.alt} style={{ height: "150px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">{category.name}</h5>
                <p className="card-text">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ ContactSection
const ContactSection = () => (
  <div className="py-5" style={{ backgroundImage: "url('https://www.arinfotech.co.in/images/what-do-bg.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-8 text-center text-md-start">
          <h3 className="text-white fw-bold mb-0">Contact for Creative & Result Oriented <br /> Android and iOS Mobile App</h3>
        </div>
        <div className="col-12 col-md-4 text-center text-md-end">
          <a href="https://api.whatsapp.com/send?phone=917300423846" className="btn fw-bold px-4 py-2" style={{ backgroundColor: "#fff", color: "#0d6efd", border: "none", borderTopLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
            Let's Chat Us
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ✅ WhyChooseSection
const WhyChooseSection = () => (
  <div className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
           <img src={aspImage} alt="Why Choose" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-dark fw-bold mb-3">Why Choose Codrexa for Mobile App Development</h2>
          <p>We have an experienced team using updated technology.</p>
          <p>We Develop User Friendly and Classy UI/UX Apps.</p>
          <p>Projects delivered on time.</p>
          <p>We develop secure apps for both platforms.</p>
        </div>
      </div>
    </div>
  </div>
);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const faqData = [
  {
    id: "faq-1",
    question: "1. What is the use of Mobile App?",
    answer: [
      {
        type: "text",
        content:
          "Mobile App (Mobile Application) is software which is designed or developed for mobile devices – Smartphones, Tablet, iPhones, iPad, etc.",
      },
      {
        type: "text",
        content:
          "You can easily do many things with the mobile application from your mobile phone or tablet like shopping, gaming, entertainment, easy to learn (Education), communication and much more.",
      },
    ],
  },
  {
    id: "faq-2",
    question: "2. What are features of Mobile Apps?",
    answer: [
      {
        type: "text",
        content:
          "Due to the many features and quality, the mobile app is popular among the users.",
      },
      {
        type: "list",
        items: [
          {
            title: "Small Size:",
            content:
              "The size of mobile apps is very small as compared to computer. For this reason, despite having less memory, there is no problem in running the smartphone.",
            boldClassName: "fw-bold",
          },
          {
            title: "Easy to use:",
            content:
              "The mobile app is very easy to operate. It is much cheaper and easier than a computer.",
            boldClassName: "fw-bold",
          },
          {
            title: "High Speed:",
            content:
              "The working efficiency of the mobile app is faster than other apps or programs.",
            boldClassName: "fw-bold",
          },
          {
            title: "Easy Availability:",
            content:
              "These are made available by the mobile service provider in the form of App store.",
            boldClassName: "fw-bold",
          },
          {
            title: "Secure:",
            content:
              "Mobile apps are more reliable and secure than computer software.",
            boldClassName: "fw-bold",
          },
        ],
      },
    ],
  },
  {
    id: "faq-3",
    question: "3. Android or iOS App which type of Mobile app is more useful?",
    answer: [
      {
        type: "text",
        content:
          "Both Android and iOS are useful in their respective places. If you do business in India only, Android applications are more useful. If you do business worldwide then iOS application will be more useful because iPhone is used more globally. In India also, iPhone users are increasing rapidly.",
      },
    ],
  },
  {
    id: "faq-4",
    question: "4. What type of business needs a mobile application?",
    answer: [
      {
        type: "text",
        content:
          "Mobile applications are required for many businesses like communication, education, cooking, social media, food ordering, shopping, business, marriage, entertainment, and banking.",
      },
    ],
  },
  {
    id: "faq-5",
    question: "5. Do we also need website along with mobile app?",
    answer: [
      {
        type: "text",
        content:
          "There is no need for a website; a well-designed mobile app can perform much faster than a mobile website. If you are developing a mobile application then you do not need website development.",
      },
    ],
  },
  {
    id: "faq-6",
    question: "6. Which technologies do you use to develop a mobile app?",
    answer: [
      {
        type: "list",
        items: [
          {
            title: "Hybrid Apps:",
            content:
              "Developed for more than one platform using web technologies.",
            boldClassName: "fw-bold",
          },
          {
            title: "Native Apps:",
            content:
              "Developed for only one OS, e.g., iPhone apps run only on iOS.",
            boldClassName: "fw-bold",
          },
          {
            title: "Web-Based Apps:",
            content:
              "Created using CSS, JavaScript, and HTML. Small in size but less performance.",
            boldClassName: "fw-bold",
          },
        ],
      },
    ],
  },
  {
    id: "faq-7",
    question:
      "7. Why choose A R Infotech for mobile application design & development?",
    answer: [
      {
        type: "text",
        content:
          "Our app development service is cost-effective. We design user-friendly layouts, get designs approved by the client, and also do custom app development. Our team has experienced designers and developers. We provide maintenance even after the creation of the mobile application.",
      },
    ],
  },
  {
    id: "faq-8",
    question:
      "8. Which platform should we target to launch our Mobile application: Android or iOS?",
    answer: [
      {
        type: "list",
        items: [
          {
            title: "Google Play Store:",
            content: "Most popular for Android apps.",
            boldClassName: "fw-bold",
          },
          {
            title: "iOS App Store:",
            content: "For iPhone, iPad, iPod devices.",
            boldClassName: "fw-bold",
          },
          {
            title: "Microsoft Store:",
            content: "For Microsoft devices.",
            boldClassName: "fw-bold",
          },
          {
            title: "Samsung Apps:",
            content: "For Samsung Android devices.",
            boldClassName: "fw-bold",
          },
          {
            title: "Amazon Apps:",
            content: "For Kindle, Amazon Fire, etc.",
            boldClassName: "fw-bold",
          },
        ],
      },
    ],
  },
  {
    id: "faq-9",
    question:
      "9. What is the subscription cost of launching the mobile application on the Store?",
    answer: [
      {
        type: "list",
        items: [
          {
            title: "Google Play Store:",
            content: "One-time $25 registration fee",
            boldClassName: "fw-bold",
          },
          {
            title: "iOS Apple Store:",
            content: "$99 annual fee (individual), $299 (company)",
            boldClassName: "fw-bold",
          },
          {
            title: "Microsoft Store:",
            content: "$19 (individual), $99 (company)",
            boldClassName: "fw-bold",
          },
          {
            title: "Samsung Apps:",
            content: "FREE",
            boldClassName: "fw-bold",
          },
          {
            title: "Amazon Apps:",
            content: "FREE",
            boldClassName: "fw-bold",
          },
        ],
      },
    ],
  },
];

// ✅ FAQ + Ambitions
const AmbitionsAndFAQ = () => (
  <div className="container my-5">
      {/* Ambitions Section */}
      <hr className="opacity-25" />
      <div className="mb-5">
        <h4 className="text-dark fw-bold mb-3">Our Ambitions</h4>
        <p className="text-muted">
          Our apps create an experience, interactivity, and loyalty. We believe
          any business can potentially unlock the art of communication by
          providing an intuitive user interface and amazing customer experience.
          In fact, we innovate applications for global audiences who want to
          create their own experience. If your application has a goal, we
          fulfill it and build an application around that goal which is
          expected.
        </p>
      </div>

      {/* FAQ Section */}
      <h3 className="text-dark fw-bold mb-4">
        Frequently Asked Questions About Mobile Application Design and
        Development
      </h3>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item mb-3" key={faq.id}>
            <h2 className="accordion-header" id={`heading-${faq.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${faq.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${faq.id}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${faq.id}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading-${faq.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer.map((paragraph, idx) => (
                  <div key={idx}>
                    {paragraph.type === "text" && (
                      <p className="text-muted">{paragraph.content}</p>
                    )}
                    {paragraph.type === "list" && (
                      <ul className="ms-3">
                        {paragraph.items?.map((item, i) => (
                          <li key={i} className="mb-2">
                            <span className={item.boldClassName}>
                              {item.title}
                            </span>{" "}
                            {item.content}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);

// ✅ Main Android Page
const Ios = () => {
  const heroData1 = { title: "Best Mobile App Development Company in Samastipur", description: "In today's digital world...", buttonText: "Get Started", buttonLink: "/contact", image: Mobile, reverse: true, bgColor: "#f9f9f9" };
  const heroData2 = { title: "Result-Oriented Mobile App Development Solutions", description: "At Codrexa, we empower businesses...", buttonText: "Learn More", buttonLink: "/services", image: appimg, reverse: false, bgColor: "#eef6ff" };
  const heroData3 = { title: "Get More Business Opportunities", description: "Codrexa helps businesses unlock growth...", buttonText: "Explore Services", buttonLink: "/android-app", image: appimg2, reverse: true, bgColor: "#fff5f5" };

  return (
    <div>
      <BackgroundImage src={img1} alt="Banner" />
      <HeroSection {...heroData1} />
      <ContactForm />
      <HeroSection {...heroData2} />
      <HeroSection {...heroData3} />
      <MobileAppServices />
      <AppCategoriesSection />
      <ContactSection />
      <WhyChooseSection />
      <AmbitionsAndFAQ />
    </div>
  );
};

export default Ios;

