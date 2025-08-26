import React from "react";
import img1 from "../../../assets/Premiumpackage.png"; // top banner
import "./Primium.css";
import { useNavigate } from "react-router-dom";

const Primium = () => {
   const navigate = useNavigate();
  return (
    <section id="packages" class="packages">
      <div className="Premiumbanner">
        <img src={img1} alt="Codrexa Banner" className="Premiumbanner-img" />
      </div>
      <div class="container">
        <h2>Website Design Package</h2>

        <div class="table-wrap">
          <table class="pkg-table">
            <thead>
              <tr>
                <th class="col-name">Feature</th>
                <th class="col-premium">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Pages</td>
                <td class="center">10 – 12</td>
              </tr>
              <tr>
                <td>Responsive Design</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Custom Layout</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Fully Mobile Compatible</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Integrated Contact Form</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Social Media Buttons</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Google Location Map</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Google Analytics</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Banner / Slider</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Video Support (YouTube)</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Pre Launch Testing</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Email IDs</td>
                <td class="center">3</td>
              </tr>
              <tr>
                <td>1 Domain Name (1 Year)</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Web Space (1 Year)</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Technical Support (365 Days)</td>
                <td class="center">
                  <span class="check"></span>
                </td>
              </tr>
              <tr>
                <td>Renewal Charges (Next Year)</td>
                <td class="center">₹3500</td>
              </tr>
              <tr>
                <td>CMS (Content Management System)</td>
                <td class="center">Available if required</td>
              </tr>
              <tr class="cta-row">
                <td></td>
                <td class="center">
                  <a onClick={() => navigate("/PersonalForm")} href="#contact" class="btn btn-premium">
                    Order Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="note">
          Note: Additional GST (18%) will be applicable to all website packages.
        </p>
        <p class="note">
          This package is best for growing businesses & startups that need a
          professional, scalable, and feature-rich website.
        </p>
      </div>
    </section>
  );
};

export default Primium;
