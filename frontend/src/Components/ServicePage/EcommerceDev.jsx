import React from "react";

const EcommerceDev = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2c3e50", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>E-Commerce Development</h1>
      <p style={styles.text}>
        Launch your online store with scalable and secure e-commerce solutions.
      </p>
      <div style={styles.card}>
        <h2>Our E-Commerce Services</h2>
        <ul>
          <li>Custom Store Development</li>
          <li>Shopify & WooCommerce</li>
          <li>Payment Gateway Integration</li>
          <li>Shopping Cart Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default EcommerceDev;
