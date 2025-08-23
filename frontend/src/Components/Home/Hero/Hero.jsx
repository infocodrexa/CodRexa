import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1581090700227-4c4f50a60a07", // Coding screen
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // Laptop desk
  "https://images.unsplash.com/photo-1518770660439-4636190af475"  // Tech abstract
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds swap
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-container">
      {/* Slider */}
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slide-image"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        className="arrow left-arrow"
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        ❮
      </button>
      <button
        className="arrow right-arrow"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
      >
        ❯
      </button>

      {/* Thumbnail Bar */}
      <div className="thumbnail-bar">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb-wrapper ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <img src={img} alt={`thumb-${index}`} className="thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
}
