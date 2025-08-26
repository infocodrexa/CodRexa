import React from "react";

const DisplayAds = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#0c2461", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
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
      <h1 style={styles.heading}>Display Advertising</h1>
      <p style={styles.text}>
        Capture attention with visually striking display ads across the web.
      </p>
      <div style={styles.card}>
        <h2>Our Display Ad Services</h2>
        <ul>
          <li>Banner Ad Design</li>
          <li>Audience Targeting</li>
          <li>Retargeting Campaigns</li>
          <li>Real-Time Analytics</li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayAds;
