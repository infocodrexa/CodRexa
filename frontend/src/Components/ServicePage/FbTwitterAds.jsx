import React from "react";

const FbTwitterAds = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#1e272e", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#444", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Facebook & Twitter Ads</h1>
      <p style={styles.text}>
        Grow your brand with engaging ad campaigns on Facebook and Twitter.
      </p>
      <div style={styles.card}>
        <h2>Our Ad Services</h2>
        <ul>
          <li>Target Audience Research</li>
          <li>Creative Ad Design</li>
          <li>Campaign Optimization</li>
          <li>Performance Tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default FbTwitterAds;
