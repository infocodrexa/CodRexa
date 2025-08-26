import React from "react";

const Ios = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #cfd9df, #e2ebf0)",
      minHeight: "100vh",
    },
    heading: { fontSize: "38px", color: "#2d3436", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#2c3e50", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>iOS App Development</h1>
      <p style={styles.text}>
        Deliver seamless iOS experiences with feature-rich iPhone & iPad apps.
      </p>
      <div style={styles.card}>
        <h2>Our iOS Services</h2>
        <ul>
          <li>Swift & Objective-C Development</li>
          <li>App Store Deployment</li>
          <li>UI/UX Optimization</li>
          <li>App Maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default Ios;
