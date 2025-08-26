import React from "react";

const YoutubePromotion = () => {
  const styles = {
    container: {
      padding: "50px",
      background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      minHeight: "100vh",
    },
    heading: { fontSize: "36px", color: "#1e272e", marginBottom: "20px" },
    text: { fontSize: "18px", color: "#333", lineHeight: "1.6" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "14px",
      marginTop: "25px",
      boxShadow: "0 5px 14px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>YouTube Promotion</h1>
      <p style={styles.text}>
        Increase video views and grow your channel with YouTube promotions.
      </p>
      <div style={styles.card}>
        <h2>Our YouTube Services</h2>
        <ul>
          <li>Video SEO</li>
          <li>Paid Video Ads</li>
          <li>Influencer Collaborations</li>
          <li>Analytics & Reporting</li>
        </ul>
      </div>
    </div>
  );
};

export default YoutubePromotion;
