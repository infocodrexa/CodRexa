import React from "react";

const Ppc = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2d3436", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pay-Per-Click Advertising</h1>
      <p style={styles.text}>
        Drive instant traffic and leads with targeted PPC campaigns.
      </p>
      <div style={styles.box}>
        <h2>Our PPC Services</h2>
        <ul>
          <li>Google Ads Management</li>
          <li>Keyword Research</li>
          <li>Ad Copywriting</li>
          <li>Conversion Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default Ppc;
