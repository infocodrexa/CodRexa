import React from "react";
import img1 from "../../../assets/basicpackage.png"; // top banner
import { useNavigate } from "react-router-dom";
import "./Basic.css";

const Basic = () => {
  const navigate = useNavigate();
  return (
    <section id="packages" className="packages">
      <div className="packagesbanner">
        <img src={img1} alt="Codrexa Banner" className="packagesbanner-img" />
      </div>
      <div className="container fade-in">
        <h2>Website Design Package</h2>

        <div className="table-wrap">
          <table className="pkg-table">
            <thead>
              <tr>
                <th className="col-name">Feature</th>
                <th className="col-silver">Basic </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Pages</td>
                <td className="center">Up to 5</td>
              </tr>
              <tr>
                <td>Responsive Design</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Custom Layout</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Fully Mobile Compatible</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Integrated Contact Form</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Social Media Buttons</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Google Location Map</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Video Support (YouTube)</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Pre Launch Testing</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>1 Domain Name (1 Year)</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Web Space (1 Year)</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr>
                <td>Technical Support (1 Month)</td>
                <td className="center">
                  <span className="check"></span>
                </td>
              </tr>
              <tr className="cta-row">
                <td></td>
                <td className="center">
                  <a onClick={() => navigate("/PersonalForm")} href="#contact" className="btn btn-green bounce">
                    Book Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          * Additional GST (18%) will be applicable to all website packages.
        </p>
      </div>

      <div className="package-info slide-up">
        <p>
          <strong>Note:</strong> Additional GST (18%) will be applicable on all
          website packages.
        </p>
        <p>
          This package is suitable for small businesses, startups, and personal
          portfolios. It covers all the essentials to give your brand a strong
          online presence at an affordable cost.
        </p>
        <p>
          For advanced features such as Blogging, E-commerce, or Custom Portals,
          a detailed quotation will be provided based on requirements.
        </p>
      </div>
    </section>
  );
};

export default Basic;
