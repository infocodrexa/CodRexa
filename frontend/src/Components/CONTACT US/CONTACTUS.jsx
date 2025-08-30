import React from "react";
import "./CONTACTUS.css";
import img1 from "../../assets/CONTACT US.png"; // top banner
import ContactForm from "../forms/ContactForm";

const CONTACTUS = () => {
  return (
    <>
      <div className="cbannerr">
        <img src={img1} alt="Codrexa Banner" className="cbannerr-img" />
      </div>
      <ContactForm />
    </>
  );
};

export default CONTACTUS;
