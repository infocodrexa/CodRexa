import React from "react";

const Maintenance = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      minHeight: "100vh",
    },
    heading: { fontSize: "40px", color: "#2f3542", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#57606f", lineHeight: "1.6" },
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
      <h1 style={styles.heading}>Website Maintenance</h1>
      <p style={styles.text}>
        Ensure your website is always up-to-date, secure, and running smoothly with our maintenance services.
      </p>
      <div style={styles.card}>
        <h2>Maintenance Services</h2>
        <ul>
          <li>Security Updates</li>
          <li>Bug Fixing</li>
          <li>Performance Monitoring</li>
          <li>Content Updates</li>
        </ul>
      </div>
    </div>
  );
};

export default Maintenance;
