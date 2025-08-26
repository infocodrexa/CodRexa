import React from "react";

const MarketplaceListing = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #fddb92, #d1fdff)",
      minHeight: "100vh",
    },
    heading: { fontSize: "38px", color: "#1e272e", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 5px 14px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Marketplace Listing</h1>
      <p style={styles.text}>
        Get your products listed on top marketplaces for better visibility.
      </p>
      <div style={styles.card}>
        <h2>Our Listing Services</h2>
        <ul>
          <li>Amazon Product Listing</li>
          <li>Flipkart Listing</li>
          <li>SEO-Friendly Descriptions</li>
          <li>Image Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketplaceListing;
