import React from "react";

const LeadMarketing = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2f3542", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#444", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Lead Marketing</h1>
      <p style={styles.text}>
        Generate quality leads with targeted lead generation strategies.
      </p>
      <div style={styles.box}>
        <h2>Our Lead Marketing Services</h2>
        <ul>
          <li>B2B & B2C Lead Generation</li>
          <li>Email Campaigns</li>
          <li>Landing Page Optimization</li>
          <li>Lead Nurturing Funnels</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadMarketing;
