import React from "react";

const Orm = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #f093fb, #f5576c)",
      minHeight: "100vh",
      color: "#fff",
    },
    heading: { fontSize: "36px", color: "#fff", marginBottom: "20px" },
    text: { fontSize: "18px", lineHeight: "1.6" },
    box: {
      background: "rgba(255,255,255,0.2)",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Reputation Management (ORM)</h1>
      <p style={styles.text}>
        Protect and enhance your brand’s online image with professional ORM strategies.
      </p>
      <div style={styles.box}>
        <h2>Our ORM Services</h2>
        <ul>
          <li>Review Management</li>
          <li>Brand Monitoring</li>
          <li>Negative Content Removal</li>
          <li>PR Campaigns</li>
        </ul>
      </div>
    </div>
  );
};

export default Orm;
