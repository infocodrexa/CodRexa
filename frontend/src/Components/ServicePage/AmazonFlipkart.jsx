import React from "react";

const AmazonFlipkart = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      minHeight: "100vh",
    },
    heading: { fontSize: "38px", color: "#2f3542", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#444", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Amazon & Flipkart Marketing</h1>
      <p style={styles.text}>
        Maximize sales with optimized product marketing on Amazon & Flipkart.
      </p>
      <div style={styles.card}>
        <h2>Our Services</h2>
        <ul>
          <li>Sponsored Ads</li>
          <li>Product Ranking</li>
          <li>Store Optimization</li>
          <li>Conversion Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default AmazonFlipkart;
