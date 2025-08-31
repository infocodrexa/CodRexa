import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ src, alt, type, marginTop = "0px" }) => {
  return (
    <div
      className={`BackgroundImagebanner banner-${type}`}
      style={{ marginTop }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default BackgroundImage;
