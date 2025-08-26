import React from "react";

const ContentMarketing = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#0a2c56", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#111", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Content Marketing</h1>
      <p style={styles.text}>
        Create high-quality content that drives traffic, builds trust, and converts.
      </p>
      <div style={styles.card}>
        <h2>Our Content Services</h2>
        <ul>
          <li>Blog Writing</li>
          <li>Infographics</li>
          <li>Case Studies</li>
          <li>Video Content</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentMarketing;
