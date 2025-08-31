import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ src, alt, type }) => {
  return (
    <div className={`BackgroundImagebanner banner-${type}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default BackgroundImage;