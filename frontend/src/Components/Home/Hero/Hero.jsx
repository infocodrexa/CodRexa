// Hero.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

// Slides data
const slides = [
    {
    title: "Modern Website Development",
    subtitle: "Fast, Responsive & Secure",
    desc: "CodRexa builds blazing-fast, responsive websites with cutting-edge technologies for businesses of all sizes.",
    btn: "🚀 Build My Website",
    img: "https://www.arinfotech.co.in/images/app-service-slide01.webp",
    bg: "linear-gradient(135deg, #3a2d7dff, #08346eff, #468780ff)",
  },
  {
    title: "SEO & Digital Marketing",
    subtitle: "Rank Higher, Get Found",
    desc: "Boost your online presence with our SEO strategies, keyword optimization, and content marketing.",
    btn: "📈 Improve My SEO",
    img: "https://www.arinfotech.co.in/images/digital-marketing-slide1.webp",
    isWheel: true,
    bg: "linear-gradient(135deg, #3a2d7dff, #08346eff, #468780ff)",
  },
  {
    title: "Website Management Services",
    subtitle: "Hassle-Free Maintenance",
    desc: "From updates to security and backups, CodRexa ensures your website runs smoothly 24/7.",
    btn: "🛠 Manage My Website",
    img: "https://www.arinfotech.co.in/images/web-development-slide02.webp",
    bg: "linear-gradient(135deg, #4c3d94ff, #113f7bff, #348881ff)",
  },
];

// Add cloned first & last slides for seamless infinite scroll
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const slideInterval = useRef(null);
  const transitionDuration = 600; // ms

  // Move to next slide
  const nextSlide = () => {
    if (!isAnimating && current === slides.length) return;
    setCurrent((prev) => prev + 1);
  };

  // Move to previous slide
  const prevSlide = () => {
    if (!isAnimating && current === 1) return;
    setCurrent((prev) => prev - 1);
  };

  // Auto-play slides every 4 sec
  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  useEffect(() => {
    if (current === 0 || current === extendedSlides.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        if (current === 0) {
          setCurrent(slides.length);
        } else {
          setCurrent(1);
        }
      }, transitionDuration);
      return () => clearTimeout(timer);
    }

    if (!isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const getIndicatorIndex = () => {
    if (current === 0) return slides.length - 1;
    if (current === extendedSlides.length - 1) return 0;
    return current - 1;
  };

  return (
    <div
      className="hero-container"
      onMouseEnter={stopSlideTimer}
      onMouseLeave={startSlideTimer}
    >
      {/* Slides wrapper */}
      <div
        className="slides"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isAnimating
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={index}
            style={{ background: slide.bg }}
          >
            <div className="slide-text">
              <h4>{slide.subtitle}</h4>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className="cta-btn">{slide.btn}</button>
            </div>
            <div className="slide-image">
              <img
                src={slide.img}
                alt={slide.title}
                className={slide.isWheel ? "wheel" : ""}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      {/* Slide indicators */}
      <div className="indicators">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`indicator ${
              idx === getIndicatorIndex() ? "active" : ""
            }`}
            onClick={() => setCurrent(idx + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

