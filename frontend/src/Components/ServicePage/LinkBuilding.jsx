import React from "react";

const LinkBuilding = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2c3e50", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Link Building</h1>
      <p style={styles.text}>
        Build high-quality backlinks that improve your domain authority and Google rankings.
      </p>
      <div style={styles.card}>
        <h2>Our Link Building Services</h2>
        <ul>
          <li>Guest Posting</li>
          <li>Broken Link Building</li>
          <li>Outreach Campaigns</li>
          <li>Authority Backlinks</li>
        </ul>
      </div>
    </div>
  );
};

export default LinkBuilding;
