import React from "react";

const Redesign = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      minHeight: "100vh",
    },
    heading: { fontSize: "40px", color: "#222f3e", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#2c2c54", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Website Redesign</h1>
      <p style={styles.text}>
        Give your website a fresh, modern look to attract and retain customers effectively.
      </p>
      <div style={styles.card}>
        <h2>Redesign Features</h2>
        <ul>
          <li>Modern UI/UX Design</li>
          <li>Responsive Layouts</li>
          <li>SEO-Friendly Structure</li>
          <li>Performance Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default Redesign;
