import React from "react";

const DomainHosting = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #d3cce3, #e9e4f0)",
      minHeight: "100vh",
    },
    heading: { fontSize: "40px", color: "#2d3436", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#2c3e50", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Domain & Hosting</h1>
      <p style={styles.text}>
        Get reliable domain registration and lightning-fast hosting solutions for your business.
      </p>
      <div style={styles.card}>
        <h2>Hosting Features</h2>
        <ul>
          <li>Domain Registration</li>
          <li>Shared & VPS Hosting</li>
          <li>Cloud Hosting</li>
          <li>24/7 Support</li>
        </ul>
      </div>
    </div>
  );
};

export default DomainHosting;
