import React from "react";
import "./CONTACTUS.css";
import img1 from "../../assets/CONTACT US.png"; // top banner
import ContactForm from "../forms/ContactForm";
import BackgroundImage from "../ServicePage/Background/BackgroundImage";

const CONTACTUS = () => {
  return (
    <>
      <BackgroundImage src={img1} alt={`image loading please wait`} marginTop="0px" />
      <ContactForm />
    </>
  );
};

export default CONTACTUS;
