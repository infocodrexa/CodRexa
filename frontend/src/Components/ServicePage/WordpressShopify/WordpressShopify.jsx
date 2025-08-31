import React from "react";
import "./WordpressShopify.css";

// ✅ Import Images
import portfolioTop from "../../../assets/portfolioimgtop.jpg";
import delandImplants from "../../../assets/delandimplants.jpg";
import gramGaurav from "../../../assets/gramgaurav.jpg";
import shreejiIndia from "../../../assets/shreejiindia.jpg";
import brandInfo from "../../../assets/brandinfo.jpg";
import healingMind from "../../../assets/healingmind.jpg";
import rootCure from "../../../assets/rootcure.jpg";

export default function WordPressPortfolioPage() {

  const portfolioData = {
    title: "Custom WordPress Website Design & Development",
    description:
      "We craft powerful, user-friendly WordPress websites designed to elevate your business. From startups to enterprises in samastipur,Bihar, we create digital experiences that impress, engage, and convert visitors into customers.",

    projects: [
      {
        id: "implant-dentistry",
        href: "/",
        image: delandImplants,
        alt: "CMS Company in India",
        title: "CMS Company in India",
        category: "Implant Dentistry",
        description:
          "Deland Implants : Comprehensive treatments in all phases of surgical and restorative dentistry",
        hasSuperscript: false,
      },
      {
        id: "ngo",
        href: "/",
        image: gramGaurav,
        alt: "CMS Company in Jaipur|A R Infotech",
        title: "CMS Company in Jaipur|A R Infotech",
        category: "NGO",
        description:
          "Gram Gaurav Sansthan : Empowerment through sustainable livelihoods",
        hasSuperscript: false,
      },
      {
        id: "shreeji-group",
        href: "/",
        image: shreejiIndia,
        alt: "wordpress website design company-A R Infotech",
        title: "wordpress website development company",
        category: "Shreeji Group",
        description:
          "With over 20 years of expertise in the manufacturing of Printing line for PVC Profiles. Our printing lines....",
        hasSuperscript: false,
      },
      {
        id: "digital-marketing",
        href: "/",
        image: brandInfo,
        alt: "wordpress website development",
        title: "wordpress website development",
        category: "Digital Marketing Services",
        description:
          "Brand Infosolution :  Specialize in Content Writing and Online Marketing Services",
        hasSuperscript: false,
      },
      {
        id: "hypnotherapy",
        href: "/",
        image: healingMind,
        alt: "wordpress website design company-A R Infotech",
        title: "wordpress website development company",
        category: "Hypnotherapy Training",
        description:
          "Healing Mind Body Hypnosis : Certified 5-PATH Hypnotherapist, a certified 7th Path self-hypnosis teacher and a member of the National Guild of Hypnotists.",
        hasSuperscript: true,
      },
      {
        id: "homeopathy",
        href: "/",
        image: rootCure,
        alt: "wordpress website design company codrexa",
        title: "wordpress website development company",
        category: "Homeopathy Doctor",
        description:
          "Root Cure: Certified 5-PATH® is to spread the benefits of Homeopathy to as many people in the world",
        hasSuperscript: true,
      },
    ],
  };

  return (
    <div>
      {/* ✅ Hero Banner Section (Text hata diya hai) */}
      <div className="portfolio-banner">
        <img
          src={portfolioTop}
          alt="Wordpress website design"
          title="Wordpress website design"
          className="banner-img"
        />
      </div>

      {/* Portfolio Content Section */}
      <section className="portfolio-content">
        <span className="portfolio-subtitle">{portfolioData.subtitle}</span>
        <h2 className="portfolio-title">{portfolioData.title}</h2>
        <p className="portfolio-description">{portfolioData.description}</p>
      </section>

      {/* Portfolio Projects */}
      <section className="portfolio-projects">
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.href} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.alt}
                  title={project.title}
                  className="project-img"
                />
              </a>
              <div className="project-info">
                <h5 className="project-category">{project.category}</h5>
                <p className="project-description">
                  {project.description}
                  {project.hasSuperscript && <sup className="sup">®</sup>}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
