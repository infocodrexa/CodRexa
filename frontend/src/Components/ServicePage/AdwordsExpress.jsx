import React from "react";

const AdwordsExpress = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #d9a7c7, #fffcdc)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2c2c54", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "25px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 5px 14px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>AdWords Express</h1>
      <p style={styles.text}>
        Simplify your ad campaigns with Google AdWords Express for small businesses.
      </p>
      <div style={styles.box}>
        <h2>Our AdWords Express Services</h2>
        <ul>
          <li>Quick Campaign Setup</li>
          <li>Automated Ad Management</li>
          <li>Budget Optimization</li>
          <li>Performance Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default AdwordsExpress;
