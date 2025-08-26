import React from "react";

const AppStoreOptimization = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      minHeight: "100vh",
    },
    heading: { fontSize: "38px", color: "#2c2c54", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#444", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>App Store Optimization (ASO)</h1>
      <p style={styles.text}>
        Improve app visibility and downloads with expert ASO strategies.
      </p>
      <div style={styles.card}>
        <h2>Our ASO Services</h2>
        <ul>
          <li>Keyword Optimization</li>
          <li>App Title & Description</li>
          <li>Creative Screenshots</li>
          <li>Review & Rating Boost</li>
        </ul>
      </div>
    </div>
  );
};

export default AppStoreOptimization;
