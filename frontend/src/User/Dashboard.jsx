import React, { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import {
  getContacts,
  getOrganizations,
  getPersonals,
} from "../services/api"; // apne api.js ka path sahi rakhna
import "bootstrap/dist/css/bootstrap.min.css";

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
    else navigate("/"); // redirect if not logged in
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

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // user data clear
    navigate("/"); // login page pe redirect
  };

  if (!user) return <p className="text-center mt-5 fs-5">Loading...</p>;

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="card shadow-lg text-center p-4 mb-4">
        <h2 className="fw-bold">
          Welcome, <span className="text-primary">{user.name}</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
        <button
          className={`btn ${activeTab === "contact" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Info
        </button>
        <button
          className={`btn ${activeTab === "organization" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setActiveTab("organization")}
        >
          Organization Info
        </button>
        <button
          className={`btn ${activeTab === "personal" ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Info
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        {/* CONTACTS */}
        {activeTab === "contact" && (
          <div>
            <h4 className="fw-semibold mb-3">📞 Contact Details</h4>
            {contacts.length > 0 ? (
              <div className="row">
                {contacts.map((c) => (
                  <div key={c._id} className="col-md-6 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{c.name}</h5>
                        <p><strong>Email:</strong> {c.email}</p>
                        <p><strong>Phone:</strong> {c.phone}</p>
                        <p><strong>Message:</strong> {c.message}</p>
                        <p className="text-muted">
                          <small>Created At: {new Date(c.createdAt).toLocaleString()}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No contact data available</p>
            )}
          </div>
        )}

        {/* ORGANIZATIONS */}
        {activeTab === "organization" && (
          <div>
            <h4 className="fw-semibold mb-3">🏢 Organization Details</h4>
            {organizations.length > 0 ? (
              <div className="row">
                {organizations.map((o) => (
                  <div key={o._id} className="col-md-6 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                      <div className="card-body">
                        <h5 className="card-title text-success">{o.name}</h5>
                        <p><strong>Email:</strong> {o.email}</p>
                        <p><strong>Phone:</strong> {o.phone}</p>
                        <p><strong>Company:</strong> {o.company}</p>
                        <p><strong>Location:</strong> {o.location}</p>
                        <p><strong>Service:</strong> {o.Service}</p>
                        <p><strong>Website:</strong> <a href={o.url} target="_blank" rel="noreferrer">{o.url}</a></p>
                        <p><strong>Requirement:</strong> {o.requirement}</p>
                        <p className="text-muted">
                          <small>Created At: {new Date(o.createdAt).toLocaleString()}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No organization data available</p>
            )}
          </div>
        )}

        {/* PERSONAL */}
        {activeTab === "personal" && (
          <div>
            <h4 className="fw-semibold mb-3">👤 Personal Info</h4>
            {personals.length > 0 ? (
              <div className="row">
                {personals.map((p) => (
                  <div key={p._id} className="col-md-6 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                      <div className="card-body">
                        <h5 className="card-title text-warning">{p.name}</h5>
                        <p><strong>Email:</strong> {p.email}</p>
                        <p><strong>Phone:</strong> {p.phone}</p>
                        <p><strong>Location:</strong> {p.location}</p>
                        <p><strong>Requirement:</strong> {p.requirement}</p>
                        <p className="text-muted">
                          <small>Created At: {new Date(p.createdAt).toLocaleString()}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No personal data available</p>
            )}
          </div>
        )}
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button className="btn btn-danger px-4" onClick={handleLogout}>
          <CgCloseR /> Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
