import React from "react";

const AffiliateMarketing = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      minHeight: "100vh",
    },
    heading: { fontSize: "40px", color: "#2c3e50", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#2f3640", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 5px 14px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Affiliate Marketing</h1>
      <p style={styles.text}>
        Boost your sales by connecting with affiliates and leveraging performance-based marketing strategies.
      </p>
      <div style={styles.card}>
        <h2>Our Affiliate Services</h2>
        <ul>
          <li>Affiliate Program Setup</li>
          <li>Network Management</li>
          <li>Performance Tracking</li>
          <li>Payout Automation</li>
        </ul>
      </div>
    </div>
  );
};

export default AffiliateMarketing;
