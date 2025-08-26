import React from "react";

const Crm = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #fddb92, #d1fdff)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#2c3e50", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "25px",
      boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CRM Solutions</h1>
      <p style={styles.text}>
        Manage customer relationships with tailored CRM solutions for your business.
      </p>
      <div style={styles.card}>
        <h2>Our CRM Services</h2>
        <ul>
          <li>Custom CRM Development</li>
          <li>Sales Automation</li>
          <li>Customer Support Systems</li>
          <li>CRM Integration with Apps</li>
        </ul>
      </div>
    </div>
  );
};

export default Crm;
