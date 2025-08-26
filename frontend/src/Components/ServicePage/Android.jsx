import React from "react";

const Android = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #38ef7d, #11998e)",
      minHeight: "100vh",
      color: "#fff",
    },
    heading: { fontSize: "38px", marginBottom: "20px" },
    text: { fontSize: "18px", lineHeight: "1.6" },
    card: {
      background: "rgba(255,255,255,0.15)",
      padding: "25px",
      borderRadius: "14px",
      marginTop: "25px",
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Android App Development</h1>
      <p style={styles.text}>
        Build powerful and scalable Android applications tailored for your business needs.
      </p>
      <div style={styles.card}>
        <h2>Our Android Services</h2>
        <ul>
          <li>Custom App Development</li>
          <li>UI/UX Design</li>
          <li>API Integration</li>
          <li>Maintenance & Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Android;
