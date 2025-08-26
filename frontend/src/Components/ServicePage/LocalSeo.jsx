import React from "react";

const LocalSeo = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #f6d365, #fda085)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#0a2c56", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#222", lineHeight: "1.6" },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Local SEO</h1>
      <p style={styles.text}>
        Get more local customers by ranking higher in Google Maps and local searches.
      </p>
      <div style={styles.box}>
        <h2>Our Local SEO Services</h2>
        <ul>
          <li>Google My Business Optimization</li>
          <li>Local Keyword Research</li>
          <li>Citations Building</li>
          <li>Online Reputation Management</li>
        </ul>
      </div>
    </div>
  );
};

export default LocalSeo;
