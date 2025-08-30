import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import Images
import portfolioTop from "../../../assets/portfolioimgtop.jpg";
import delandImplants from "../../../assets/delandimplants.jpg";
import gramGaurav from "../../../assets/gramgaurav.jpg";
import shreejiIndia from "../../../assets/shreejiindia.jpg";
import brandInfo from "../../../assets/brandinfo.jpg";
import healingMind from "../../../assets/healingmind.jpg";
import rootCure from "../../../assets/rootcure.jpg";

export default function WordPressPortfolioPage() {
  const breadcrumbData = [
    { id: "home", text: "Home", href: "/" },
    { id: "services", text: "Services", href: "/l" },
    { id: "current", text: "Wordpress Website Designing", href: null },
  ];

  const portfolioData = {
    subtitle: "Our Portfolio",
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
      {/* ✅ Responsive Hero Banner CSS */}
      <style>{`
        .portfolio-top {
          margin-top: 80px; /* desktop */
        }
        @media (max-width: 992px) {
          .portfolio-top {
            margin-top: 100px; /* tablet */
          }
        }
        @media (max-width: 576px) {
          .portfolio-top {
            margin-top: 120px; /* mobile */
          }
        }
      `}</style>

      {/* Hero Banner */}
      <div className="portfolio-top">
        <img
          src={portfolioTop}
          alt="Wordpress website design"
          title="Wordpress website design"
          className="img-fluid w-100"
          style={{ maxHeight: "450px", objectFit: "cover" }}
        />
      </div>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-light py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            {breadcrumbData.map((item) => (
              <li
                key={item.id}
                className={`breadcrumb-item ${
                  !item.href ? "active fw-bold text-primary" : ""
                }`}
                aria-current={!item.href ? "page" : undefined}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-dark text-decoration-none"
                  >
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Portfolio Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <span className="text-primary fw-bold text-uppercase">
            {portfolioData.subtitle}
          </span>
          <h1 className="fw-bold mt-2">{portfolioData.title}</h1>
          <p className="text-muted">{portfolioData.description}</p>

          <div className="row mt-4 g-4">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="card shadow-lg border-0 w-100 h-100">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt={project.alt}
                      title={project.title}
                      className="card-img-top w-100"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                  <div className="card-body text-start p-4 d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold text-uppercase fs-5">
                      {project.category}
                    </h5>
                    <p className="card-text fw-semibold fs-6 flex-grow-1">
                      {project.description}{" "}
                      {project.hasSuperscript && (
                        <sup className="small">®</sup>
                      )}
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm mt-2 align-self-start"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
