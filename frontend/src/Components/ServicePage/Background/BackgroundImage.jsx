import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ src, alt, marginTop = "0px" }) => {
  return (
    <div className="banner" style={{ marginTop }}>
      <img src={src} alt={alt} className="banner-img img-fluid" />
    </div>
  );
};

export default BackgroundImage;
