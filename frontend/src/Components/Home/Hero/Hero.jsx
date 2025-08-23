import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
];

const Hero = () => {
  const [current, setCurrent] = useState(1); // start from 1 because of cloned slides
  const sliderRef = useRef(null);
  const transitionRef = useRef(true);

  const slides = [images[images.length - 1], ...images, images[0]]; // cloned first & last

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        transitionRef.current = false;
        setCurrent(1);
      }, 500);
    } else if (current === 0) {
      setTimeout(() => {
        transitionRef.current = false;
        setCurrent(slides.length - 2);
      }, 500);
    } else {
      transitionRef.current = true;
    }
  }, [current]);

  const goToSlide = (index) => {
    setCurrent(index + 1);
  };

  return (
    <div className="hero-container">
      <div className="slider-wrapper">
        <div
          ref={sliderRef}
          className="slides"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transitionRef.current ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {slides.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>

        {/* Indicators */}
        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index + 1 === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Thumbnails */}
        {/* <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              className={`thumb ${index + 1 === current ? "active-thumb" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
