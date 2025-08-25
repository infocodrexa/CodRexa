import React from "react";
import "./Clients.css";
import bardiya from "../../../assets/what-we-do.png";
const Clients = () => {
  return (
    <section className="clients-section">
      <h4 className="clients-subtitle">OUR CLIENT</h4>
      <h2 className="clients-title">Who we’ve helped</h2>
      <p className="clients-desc">
        Successfully delivered digital products and platforms for a diverse range of use cases across key industries.
      </p>

      <div className="clients-logos">
        <img src={bardiya} alt="Bardiya Group" />
        <img src={bardiya} alt="Empyreal Club" />
      </div>
    </section>
  );
};

export default Clients;
