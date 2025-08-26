import React from "react";

const Ssl = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #c9ffbf, #ffafbd)",
      minHeight: "100vh",
    },
    heading: { fontSize: "40px", color: "#1e272e", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#2f3542", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>SSL Certificates</h1>
      <p style={styles.text}>
        Secure your website and build customer trust with SSL encryption.
      </p>
      <div style={styles.card}>
        <h2>SSL Benefits</h2>
        <ul>
          <li>Data Encryption</li>
          <li>Improved SEO Ranking</li>
          <li>Customer Trust</li>
          <li>Compliance with Standards</li>
        </ul>
      </div>
    </div>
  );
};

export default Ssl;
