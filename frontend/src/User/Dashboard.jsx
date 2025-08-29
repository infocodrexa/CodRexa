import React, { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import {
  getContacts,
  getOrganizations,
  getPersonals,
} from "../services/api"; // apne api.js ka path sahi rakhna
import "./Dashboard.css"; // ✅ apna css file

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [personals, setPersonals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);
    else navigate("/"); 
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsData, organizationsData, personalsData] =
          await Promise.all([getContacts(), getOrganizations(), getPersonals()]);
        setContacts(contactsData);
        setOrganizations(organizationsData);
        setPersonals(personalsData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header-card">
        <h2>
          Welcome, <span className="username">{user.name}</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Info
        </button>
        <button
          className={`tab-btn ${activeTab === "organization" ? "active" : ""}`}
          onClick={() => setActiveTab("organization")}
        >
          Organization Info
        </button>
        <button
          className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Info
        </button>
      </div>

      {/* Content */}
      <div className="content">
        {activeTab === "contact" && (
          <div>
            <h4 className="section-title">📞 Contact Details</h4>
            {contacts.length > 0 ? (
              <div className="card-grid">
                {contacts.map((c) => (
                  <div key={c._id} className="data-card">
                    <h5 className="text-blue">{c.name}</h5>
                    <p><strong>Email:</strong> {c.email}</p>
                    <p><strong>Phone:</strong> {c.phone}</p>
                    <p><strong>Message:</strong> {c.message}</p>
                    <p className="muted">
                      <small>Created At: {new Date(c.createdAt).toLocaleString()}</small>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No contact data available</p>
            )}
          </div>
        )}

        {activeTab === "organization" && (
          <div>
            <h4 className="section-title">🏢 Organization Details</h4>
            {organizations.length > 0 ? (
              <div className="card-grid">
                {organizations.map((o) => (
                  <div key={o._id} className="data-card">
                    <h5 className="text-green">{o.name}</h5>
                    <p><strong>Email:</strong> {o.email}</p>
                    <p><strong>Phone:</strong> {o.phone}</p>
                    <p><strong>Company:</strong> {o.company}</p>
                    <p><strong>Location:</strong> {o.location}</p>
                    <p><strong>Service:</strong> {o.Service}</p>
                    <p><strong>Website:</strong> <a href={o.url} target="_blank" rel="noreferrer">{o.url}</a></p>
                    <p><strong>Requirement:</strong> {o.requirement}</p>
                    <p className="muted">
                      <small>Created At: {new Date(o.createdAt).toLocaleString()}</small>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No organization data available</p>
            )}
          </div>
        )}

        {activeTab === "personal" && (
          <div>
            <h4 className="section-title">👤 Personal Info</h4>
            {personals.length > 0 ? (
              <div className="card-grid">
                {personals.map((p) => (
                  <div key={p._id} className="data-card">
                    <h5 className="text-yellow">{p.name}</h5>
                    <p><strong>Email:</strong> {p.email}</p>
                    <p><strong>Phone:</strong> {p.phone}</p>
                    <p><strong>Location:</strong> {p.location}</p>
                    <p><strong>Requirement:</strong> {p.requirement}</p>
                    <p className="muted">
                      <small>Created At: {new Date(p.createdAt).toLocaleString()}</small>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No personal data available</p>
            )}
          </div>
        )}
      </div>

      {/* Logout */}
      <div className="logout-wrap">
        <button className="logout-btn" onClick={handleLogout}>
          <CgCloseR /> Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
