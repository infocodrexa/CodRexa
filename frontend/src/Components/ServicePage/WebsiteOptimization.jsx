import React from "react";

const WebsiteOptimization = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#1a1a1a", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
      marginTop: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Website Optimization</h1>
      <p style={styles.text}>
        Improve your site speed, performance, and user experience for better conversions.
      </p>
      <div style={styles.box}>
        <h2>Our Optimization Services</h2>
        <ul>
          <li>Speed Optimization</li>
          <li>Image Compression</li>
          <li>Mobile Responsiveness</li>
          <li>Core Web Vitals Improvement</li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteOptimization;
