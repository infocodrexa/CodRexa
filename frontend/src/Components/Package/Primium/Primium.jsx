import React from "react";
import img1 from "../../../assets/Premiumpackage.png"; // top banner
import "./Primium.css";
import { useNavigate } from "react-router-dom";

const Primium = () => {
  const navigate = useNavigate();
  return (
    <section id="packages" className="Primium__packages">
      <div className="Primium__banner">
        <img src={img1} alt="Codrexa Banner" className="Primium__banner-img" />
      </div>
      <div className="Primium__container">
        <h2>Website Design Package</h2>

        <div className="Primium__table-wrap">
          <table className="Primium__pkg-table">
            <thead>
              <tr>
                <th className="Primium__col-name">Feature</th>
                <th className="Primium__col-premium">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Pages</td>
                <td className="Primium__center">10 – 12</td>
              </tr>
              <tr>
                <td>Responsive Design</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Custom Layout</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Fully Mobile Compatible</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Integrated Contact Form</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Social Media Buttons</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Google Location Map</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Google Analytics</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Banner / Slider</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Video Support (YouTube)</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Pre Launch Testing</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Email IDs</td>
                <td className="Primium__center">3</td>
              </tr>
              <tr>
                <td>1 Domain Name (1 Year)</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Web Space (1 Year)</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Technical Support (365 Days)</td>
                <td className="Primium__center">
                  <span className="Primium__check"></span>
                </td>
              </tr>
              <tr>
                <td>Renewal Charges (Next Year)</td>
                <td className="Primium__center">₹3500</td>
              </tr>
              <tr>
                <td>CMS (Content Management System)</td>
                <td className="Primium__center">Available if required</td>
              </tr>
              <tr className="Primium__cta-row">
                <td></td>
                <td className="Primium__center">
                  <a
                    onClick={() => navigate("/PersonalForm")}
                    href="#contact"
                    className="Primium__btn Primium__btn-premium"
                  >
                    Order Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="Primium__note">
          Note: Additional GST (18%) will be applicable to all website packages.
        </p>
        <p className="Primium__note">
          This package is best for growing businesses & startups that need a
          professional, scalable, and feature-rich website.
        </p>
      </div>
    </section>
  );
};

export default Primium;
