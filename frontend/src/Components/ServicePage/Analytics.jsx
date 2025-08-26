import React from "react";

const Analytics = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#0a2c56", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Analytics</h1>
      <p style={styles.text}>
        Track and analyze your website traffic to make data-driven marketing decisions.
      </p>
      <div style={styles.card}>
        <h2>Our Analytics Services</h2>
        <ul>
          <li>Google Analytics Setup</li>
          <li>Conversion Tracking</li>
          <li>Monthly Reports</li>
          <li>User Behavior Insights</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
