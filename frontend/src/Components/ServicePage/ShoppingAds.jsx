import React from "react";

const ShoppingAds = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#6c3483", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 5px 14px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shopping Ads</h1>
      <p style={styles.text}>
        Boost eCommerce sales with optimized shopping ads for your products.
      </p>
      <div style={styles.card}>
        <h2>Our Shopping Ad Services</h2>
        <ul>
          <li>Google Merchant Center Setup</li>
          <li>Product Feed Optimization</li>
          <li>Shopping Campaigns</li>
          <li>Performance Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingAds;
