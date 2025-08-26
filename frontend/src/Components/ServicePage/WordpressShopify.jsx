import React from "react";

const WordpressShopify = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#1b1464", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>WordPress & Shopify Development</h1>
      <p style={styles.text}>
        Build powerful websites and online stores using WordPress and Shopify platforms.
      </p>
      <div style={styles.card}>
        <h2>Our Services</h2>
        <ul>
          <li>Custom WordPress Themes</li>
          <li>Shopify Store Setup</li>
          <li>Plugin & App Integration</li>
          <li>Ongoing Support & Maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default WordpressShopify;
