import React from "react";
import img1 from "../../../assets/basicpackage.png"; // top banner
import { useNavigate } from "react-router-dom";
import "./Basic.css";
import BackgroundImage from "../../ServicePage/Background/BackgroundImage";

const Basic = () => {
  const navigate = useNavigate();
  return (
    <section id="packages" className="Basic__packages">
      <BackgroundImage src={img1} alt="Codrexa Banner" type="1500x500" />
      <div className="Basic__container Basic__fade-in">
        <h2>Website Design Package</h2>

        <div className="Basic__table-wrap">
          <table className="Basic__pkg-table">
            <thead>
              <tr>
                <th className="Basic__col-name">Feature</th>
                <th className="Basic__col-silver">Basic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Pages</td>
                <td className="Basic__center">Up to 5</td>
              </tr>
              <tr>
                <td>Responsive Design</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Custom Layout</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Fully Mobile Compatible</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Integrated Contact Form</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Social Media Buttons</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Google Location Map</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Video Support (YouTube)</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Pre Launch Testing</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>1 Domain Name (1 Year)</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Web Space (1 Year)</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr>
                <td>Technical Support (1 Month)</td>
                <td className="Basic__center"><span className="Basic__check"></span></td>
              </tr>
              <tr className="Basic__cta-row">
                <td></td>
                <td className="Basic__center">
                  <a
                    onClick={() => navigate("/PersonalForm")}
                    href="#contact"
                    className="Basic__btn Basic__btn-green Basic__bounce"
                  >
                    Book Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="Basic__note">
          * Additional GST (18%) will be applicable to all website packages.
        </p>
      </div>

      <div className="Basic__package-info Basic__slide-up">
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
