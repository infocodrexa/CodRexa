import React from "react";
import { useNavigate } from "react-router-dom";
import "./Clients.css";
import bardiya from "../../../assets/99-Vihar-Logo.png";
import bardiya1 from "../../../assets/rjd-logo.png";
const Clients = () => {
  const navigate = useNavigate();
  return (
    <section className="clients-section">
      <h4 className="clients-subtitle">OUR CLIENT</h4>
      <h2 className="clients-title">Who we’ve helped</h2>
      <p className="clients-desc">
        Successfully delivered digital products and platforms for a diverse range of use cases across key industries.
      </p>

      <div className="clients-logos">
        <a href="https://99vihar.in/"><img src={bardiya} alt="Bardiya Group" /></a>
        
        <a href="https://jawaharlalray.in/"> <img src={bardiya1} alt="Empyreal Club" /></a>
        
      </div>
    </section>
  );
};

export default Clients;
