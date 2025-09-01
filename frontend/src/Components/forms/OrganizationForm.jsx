import React, { useState } from "react";
import { createOrganization } from "../../services/api";
import "./OrganizationForm.css";
import orgVideo from "../../assets/organition.mp4";

const OrganizationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    Service: "",   
    url: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrganization(form);
      alert("Organization form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        Service: "",   
        url: "",
        requirement: "",
      });
    } catch (err) {
      alert("Failed to submit organization form");
    }
  };

  return (
    <div className="org-form-container">
      {/* Heading OUTSIDE the card */}
      <div className="org-form-heading">
        <h5 className="small-title">ENQUIRY</h5>
        <h2 className="form-title">Organization Enquiry Form</h2>
        <p className="form-subtitle">
          Please fill the form. Our Marketing Executive will contact you soon.
        </p>
      </div>

      <div className="org-form-wrapper">
        {/* Left Form Side */}
        <div className="org-form-left">
          <form onSubmit={handleSubmit} className="org-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                className="form-control"
                name="company"
                value={form.company}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={form.location}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Required Service</label>
              <input
                type="text"
                className="form-control"
                name="Service"   
                value={form.Service}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Website URL</label>
              <input
                type="url"
                className="form-control"
                name="url"
                value={form.url}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Requirement</label>
              <textarea
                className="form-control"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              ENQUIRY
            </button>
          </form>
        </div>

        {/* Right Video Side */}
        <div className="org-form-right">
          <video
            src={orgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="org-form-video"
          />
        </div>
      </div>

      {/* Call Now Section */}
      <a href="tel:+917300423846" className="call-now">
        📞 Call Now @ 7300423846
      </a>
    </div>
  );
};

export default OrganizationForm;
