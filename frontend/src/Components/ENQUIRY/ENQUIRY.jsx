import React from "react";
import BackgroundImage from "../ServicePage/Background/BackgroundImage";
import img1 from "../../assets/ENQUIRY.png"; // top banner
import OrganizationForm from "../forms/OrganizationForm";

const ENQUIRY = () => {
  return (
    <>
      <BackgroundImage src={img1} alt="Codrexa Banner" type="1500x500" />
      <OrganizationForm />
    </>
  );
};

export default ENQUIRY;
