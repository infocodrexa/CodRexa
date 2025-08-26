import React from "react";

const Smo = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Social Media Optimization (SMO)</h1>
        <p style={styles.tagline}>
          Build your brand presence & engage with customers across all social platforms.
        </p>
      </header>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Content Creation</h2>
          <p>Engaging posts, reels, and stories designed for your audience.</p>
        </div>
        <div style={styles.card}>
          <h2>Brand Awareness</h2>
          <p>Boost reach and visibility with hashtags & influencer strategies.</p>
        </div>
        <div style={styles.card}>
          <h2>Community Building</h2>
          <p>Create loyal followers who engage and share your content.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    padding: "50px 20px",
    background: "#f9f5ff",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#6a1b9a",
    fontWeight: "700",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#444",
    marginTop: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
};

export default Smo;
