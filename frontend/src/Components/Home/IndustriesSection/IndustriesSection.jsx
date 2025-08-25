import React from "react";
import "./IndustriesSection.css";

const industries = [
  { name: "Grocery", icon: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { name: "Education", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },
  { name: "eCommerce", icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png" },
  { name: "Healthcare", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" },
  { name: "Restaurant", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "Real Estate", icon: "https://cdn-icons-png.flaticon.com/512/235/235861.png" },
  { name: "Tour & Travels", icon: "https://cdn-icons-png.flaticon.com/512/2076/2076234.png" },
  { name: "Transport", icon: "https://cdn-icons-png.flaticon.com/512/854/854894.png" },
  { name: "Event", icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png" },
  { name: "Game", icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png" },
  { name: "Finance", icon: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
  { name: "On-Demand", icon: "https://cdn-icons-png.flaticon.com/512/927/927667.png" },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <h4>INDUSTRIES WE WORK FOR</h4>
      <h2>Helping Businesses in All Domains</h2>
      <p>
        Successfully delivered digital products and platforms for a diverse range of use
        cases across key industries.
      </p>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
