import React, { useState } from "react";
import { createOrganization } from "../../services/api";
import "./OrganizationForm.css";
import orgIllustration from "../../assets/logo.png"; // add your illustration here

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
      <div className="org-form-wrapper shadow-lg">
        <div className="org-form-left">
          <h5 className="small-title">ENQUIRY</h5>
          <h2 className="form-title">Enquiry Form</h2>
          <p className="form-subtitle">
            Please fill the form. Our Marketing Executive will contact you soon.
          </p>
          <form onSubmit={handleSubmit} className="org-form">
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="Service" placeholder="Required Service" value={form.Service} onChange={handleChange} required />
              </div>
              <div className="col-12">
                <input type="url" className="form-control" name="url" placeholder="Website URL" value={form.url} onChange={handleChange} />
              </div>
              <div className="col-12">
                <textarea className="form-control" name="requirement" placeholder="Your Requirements..." value={form.requirement} onChange={handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Submit 🚀
            </button>
          </form>
        </div>
        <div className="org-form-right">
          <img src={orgIllustration} alt="Organization Illustration" />
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;
