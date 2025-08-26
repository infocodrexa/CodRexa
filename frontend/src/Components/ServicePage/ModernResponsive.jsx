import React from "react";

const ModernResponsive = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2d3436", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#111", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Modern Responsive Design</h1>
      <p style={styles.text}>
        Build modern, mobile-friendly, and responsive websites that adapt to all devices.
      </p>
      <div style={styles.box}>
        <h2>Our Design Services</h2>
        <ul>
          <li>Responsive Layouts</li>
          <li>UI/UX Design</li>
          <li>Cross-Browser Compatibility</li>
          <li>Mobile-First Development</li>
        </ul>
      </div>
    </div>
  );
};

export default ModernResponsive;
