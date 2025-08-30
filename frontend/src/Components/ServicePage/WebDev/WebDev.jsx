import React from "react";

const WebDev = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#0a3d62", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#444", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Web Development</h1>
      <p style={styles.text}>
        We design and develop professional websites tailored to your business goals.
      </p>
      <div style={styles.card}>
        <h2>Our Development Services</h2>
        <ul>
          <li>Custom Website Design</li>
          <li>Full-Stack Development</li>
          <li>API Integrations</li>
          <li>Enterprise Web Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDev;
